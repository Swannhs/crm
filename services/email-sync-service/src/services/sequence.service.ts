import { prisma } from "../lib/prisma.js";
import { MailService } from "./mail.service.js";

const mailService = new MailService();

export class SequenceService {
  async enrollContact(params: {
    orgId: string,
    sequenceId: string,
    contactEmail: string,
    contactId?: string,
    dealId?: string
  }) {
    const { orgId, sequenceId, contactEmail, contactId, dealId } = params;

    const sequence = await prisma.emailSequence.findFirst({
      where: { id: sequenceId, orgId, isActive: true }
    });

    if (!sequence) {
      throw new Error("Sequence not found or inactive");
    }

    const enrollment = await prisma.sequenceEnrollment.create({
      data: {
        orgId,
        sequenceId,
        contactEmail,
        contactId,
        dealId,
        status: "active",
        currentStep: 0
      }
    });

    await prisma.emailSequence.update({
      where: { id: sequenceId },
      data: { enrollmentCount: { increment: 1 } }
    });

    // Schedule the first step
    await this.scheduleNextStep(enrollment.id);

    return enrollment;
  }

  async scheduleNextStep(enrollmentId: string) {
    const enrollment = await prisma.sequenceEnrollment.findUnique({
      where: { id: enrollmentId },
      include: { sequence: true }
    });

    if (!enrollment || enrollment.status !== "active") return;

    const steps = enrollment.sequence.steps as any[];
    const nextStepIndex = enrollment.currentStep;
    
    if (nextStepIndex >= steps.length) {
      await prisma.sequenceEnrollment.update({
        where: { id: enrollmentId },
        data: { status: "completed", completedAt: new Date() }
      });
      return;
    }

    const step = steps[nextStepIndex];
    const scheduledAt = new Date();
    if (step.delayDays) {
      scheduledAt.setDate(scheduledAt.getDate() + step.delayDays);
    }

    await prisma.sequenceActivity.create({
      data: {
        orgId: enrollment.orgId,
        enrollmentId: enrollment.id,
        stepNumber: step.stepNumber,
        type: step.type,
        status: "pending",
        scheduledAt
      }
    });
  }

  async processPendingActivities() {
    const now = new Date();
    const pendingActivities = await prisma.sequenceActivity.findMany({
      where: {
        status: "pending",
        scheduledAt: { lte: now }
      },
      include: {
        enrollment: {
          include: {
            sequence: true
          }
        }
      }
    });

    console.log(`Processing ${pendingActivities.length} pending sequence activities`);

    for (const activity of pendingActivities) {
      try {
        if (activity.type === "email") {
          await this.executeEmailStep(activity);
        }
        
        // Update activity status
        await prisma.sequenceActivity.update({
          where: { id: activity.id },
          data: { status: "sent", sentAt: new Date() }
        });

        // Advance enrollment to next step
        await prisma.sequenceEnrollment.update({
          where: { id: activity.enrollmentId },
          data: { currentStep: { increment: 1 } }
        });

        await this.scheduleNextStep(activity.enrollmentId);
        
      } catch (error: any) {
        console.error(`Failed to execute step ${activity.stepNumber} for enrollment ${activity.enrollmentId}:`, error);
        await prisma.sequenceActivity.update({
          where: { id: activity.id },
          data: { status: "failed", errorMessage: error.message }
        });
      }
    }
  }

  private async executeEmailStep(activity: any) {
    const steps = activity.enrollment.sequence.steps as any[];
    const step = steps.find(s => s.stepNumber === activity.stepNumber);
    
    if (!step || !step.templateId) {
      throw new Error("Invalid email step configuration");
    }

    const template = await prisma.emailTemplate.findUnique({
      where: { id: step.templateId }
    });

    if (!template) {
      throw new Error(`Template ${step.templateId} not found`);
    }

    // resolve variables if needed
    const body = template.body;
    const subject = template.subject;

    await mailService.sendEmail({
      orgId: activity.orgId,
      userId: activity.enrollment.sequence.createdBy,
      to: activity.enrollment.contactEmail,
      subject,
      body,
      isHtml: true, // templates are usually HTML
      relatedDealId: activity.enrollment.dealId || undefined,
      relatedContactId: activity.enrollment.contactId || undefined
    });

    console.log(`Sequence email sent to ${activity.enrollment.contactEmail}`);
  }
}
