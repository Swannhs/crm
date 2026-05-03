import { prisma } from "../lib/prisma.js";
import { MailService } from "./mail.service.js";

const defaultMailService = new MailService();

export class SequenceService {
  constructor(
    private readonly deps: {
      db?: typeof prisma;
      mailService?: MailService;
    } = {},
  ) {}

  async enrollContact(params: {
    orgId: string;
    sequenceId: string;
    contactEmail: string;
    contactId?: string;
    dealId?: string;
    firstName?: string;
    companyName?: string;
    dealName?: string;
  }) {
    const db = this.deps.db ?? prisma;
    const { orgId, sequenceId, contactEmail, contactId, dealId, firstName, companyName, dealName } = params;

    const sequence = await db.emailSequence.findFirst({ where: { id: sequenceId, orgId, isActive: true } });
    if (!sequence) throw new Error("Sequence not found or inactive");

    const enrollment = await db.sequenceEnrollment.create({
      data: {
        orgId,
        sequenceId,
        contactEmail,
        contactId,
        dealId,
        firstName,
        companyName,
        dealName,
        status: "active",
        currentStep: 0,
      },
    });

    await db.emailSequence.update({ where: { id: sequenceId }, data: { enrollmentCount: { increment: 1 } } });
    await this.scheduleNextStep(enrollment.id);
    return enrollment;
  }

  async listEnrollments(orgId: string, sequenceId: string) {
    const db = this.deps.db ?? prisma;
    return db.sequenceEnrollment.findMany({
      where: { orgId, sequenceId },
      orderBy: { startedAt: "desc" },
      include: {
        activities: { orderBy: { scheduledAt: "asc" } },
      },
    });
  }

  async getEnrollmentTimeline(orgId: string, enrollmentId: string) {
    const db = this.deps.db ?? prisma;
    const enrollment = await db.sequenceEnrollment.findFirst({
      where: { id: enrollmentId, orgId },
      include: { activities: { orderBy: { scheduledAt: "asc" } } },
    });
    if (!enrollment) throw new Error("Enrollment not found");
    return enrollment;
  }

  async getEnrollmentStatus(orgId: string, enrollmentId: string) {
    const db = this.deps.db ?? prisma;
    const enrollment = await db.sequenceEnrollment.findFirst({
      where: { id: enrollmentId, orgId },
      include: { sequence: true, activities: true },
    });
    if (!enrollment) throw new Error("Enrollment not found");

    const totalSteps = Array.isArray(enrollment.sequence.steps) ? enrollment.sequence.steps.length : 0;
    const sentCount = enrollment.activities.filter((a) => a.status === "sent").length;
    const failedCount = enrollment.activities.filter((a) => a.status === "failed").length;
    const pendingCount = enrollment.activities.filter((a) => a.status === "pending").length;
    const progressPct = totalSteps > 0 ? Math.round((sentCount / totalSteps) * 100) : 0;
    const nextActivity = enrollment.activities
      .filter((a) => a.status === "pending")
      .sort((a, b) => a.scheduledAt.getTime() - b.scheduledAt.getTime())[0];

    return {
      enrollmentId: enrollment.id,
      sequenceId: enrollment.sequenceId,
      sequenceName: enrollment.sequence.name,
      status: enrollment.status,
      contactEmail: enrollment.contactEmail,
      currentStep: enrollment.currentStep,
      totalSteps,
      progressPct,
      counts: {
        sent: sentCount,
        failed: failedCount,
        pending: pendingCount,
      },
      stopReason:
        enrollment.status === "unsubscribed"
          ? "unsubscribed"
          : enrollment.status === "replied"
            ? "replied"
            : enrollment.status === "cancelled"
              ? "cancelled"
              : null,
      timeline: enrollment.activities
        .sort((a, b) => a.scheduledAt.getTime() - b.scheduledAt.getTime())
        .map((a) => ({
          id: a.id,
          stepNumber: a.stepNumber,
          type: a.type,
          status: a.status,
          scheduledAt: a.scheduledAt,
          sentAt: a.sentAt,
          errorMessage: a.errorMessage,
        })),
      nextActivity: nextActivity
        ? {
            id: nextActivity.id,
            stepNumber: nextActivity.stepNumber,
            type: nextActivity.type,
            scheduledAt: nextActivity.scheduledAt,
          }
        : null,
      startedAt: enrollment.startedAt,
      completedAt: enrollment.completedAt,
      unsubscribedAt: enrollment.unsubscribedAt,
    };
  }

  async pauseEnrollment(orgId: string, enrollmentId: string) {
    return this.setEnrollmentStatus(orgId, enrollmentId, "paused");
  }

  async resumeEnrollment(orgId: string, enrollmentId: string) {
    const db = this.deps.db ?? prisma;
    const enrollment = await db.sequenceEnrollment.findFirst({ where: { id: enrollmentId, orgId } });
    if (!enrollment) throw new Error("Enrollment not found");

    const updated = await db.sequenceEnrollment.update({ where: { id: enrollment.id }, data: { status: "active" } });
    const existingPending = await db.sequenceActivity.findFirst({
      where: { enrollmentId: enrollment.id, status: "pending" },
    });
    if (!existingPending) {
      await this.scheduleNextStep(enrollment.id);
    }
    return updated;
  }

  async cancelEnrollment(orgId: string, enrollmentId: string) {
    const db = this.deps.db ?? prisma;
    const enrollment = await this.setEnrollmentStatus(orgId, enrollmentId, "cancelled", true);
    await db.sequenceActivity.updateMany({
      where: { enrollmentId, status: "pending" },
      data: { status: "failed", errorMessage: "Enrollment cancelled" },
    });
    return enrollment;
  }

  async unsubscribeByEmail(orgId: string, email: string) {
    const db = this.deps.db ?? prisma;
    const result = await db.sequenceEnrollment.updateMany({
      where: { orgId, contactEmail: email.toLowerCase(), status: { in: ["active", "paused"] } },
      data: { status: "unsubscribed", unsubscribedAt: new Date(), completedAt: new Date() },
    });

    await db.sequenceActivity.updateMany({
      where: {
        orgId,
        status: "pending",
        enrollment: { contactEmail: email.toLowerCase() },
      },
      data: { status: "failed", errorMessage: "Contact unsubscribed" },
    });

    return result.count;
  }

  async scheduleNextStep(enrollmentId: string) {
    const db = this.deps.db ?? prisma;
    const enrollment = await db.sequenceEnrollment.findUnique({ where: { id: enrollmentId }, include: { sequence: true } });
    if (!enrollment || enrollment.status !== "active") return;

    const steps = enrollment.sequence.steps as any[];
    const nextStepIndex = enrollment.currentStep;
    if (nextStepIndex >= steps.length) {
      await db.sequenceEnrollment.update({ where: { id: enrollmentId }, data: { status: "completed", completedAt: new Date() } });
      return;
    }

    const existingPending = await db.sequenceActivity.findFirst({ where: { enrollmentId, status: "pending", stepNumber: steps[nextStepIndex].stepNumber } });
    if (existingPending) return;

    const step = steps[nextStepIndex];
    const scheduledAt = new Date();
    if (step.delayDays) scheduledAt.setDate(scheduledAt.getDate() + step.delayDays);

    await db.sequenceActivity.create({
      data: {
        orgId: enrollment.orgId,
        enrollmentId: enrollment.id,
        stepNumber: step.stepNumber,
        type: step.type,
        status: "pending",
        scheduledAt,
      },
    });
  }

  async processPendingActivities() {
    const db = this.deps.db ?? prisma;
    const now = new Date();
    const pendingActivities = await db.sequenceActivity.findMany({
      where: { status: "pending", scheduledAt: { lte: now } },
      include: { enrollment: { include: { sequence: true } } },
      orderBy: { scheduledAt: "asc" },
    });

    for (const activity of pendingActivities) {
      try {
        if (activity.enrollment.status !== "active") {
          await db.sequenceActivity.update({ where: { id: activity.id }, data: { status: "failed", errorMessage: `Enrollment ${activity.enrollment.status}` } });
          continue;
        }

        const shouldStop = await this.shouldStopForReply(activity.enrollment.orgId, activity.enrollment.id);
        if (shouldStop) {
          await this.stopEnrollmentAsReplied(activity.enrollment.id);
          await db.sequenceActivity.update({ where: { id: activity.id }, data: { status: "failed", errorMessage: "Stopped after contact reply" } });
          continue;
        }

        if (activity.type === "email") {
          await this.executeEmailStep(activity);
        }

        await db.sequenceActivity.update({ where: { id: activity.id }, data: { status: "sent", sentAt: new Date() } });
        await db.sequenceEnrollment.update({ where: { id: activity.enrollmentId }, data: { currentStep: { increment: 1 } } });
        await this.scheduleNextStep(activity.enrollmentId);
      } catch (error: any) {
        await db.sequenceActivity.update({ where: { id: activity.id }, data: { status: "failed", errorMessage: error.message } });
      }
    }
  }

  private async executeEmailStep(activity: any) {
    const db = this.deps.db ?? prisma;
    const mailService = this.deps.mailService ?? defaultMailService;

    const steps = activity.enrollment.sequence.steps as any[];
    const step = steps.find((s) => s.stepNumber === activity.stepNumber);
    if (!step || !step.templateId) throw new Error("Invalid email step configuration");

    const template = await db.emailTemplate.findUnique({ where: { id: step.templateId } });
    if (!template) throw new Error(`Template ${step.templateId} not found`);

    const renderedSubject = this.renderVariables(template.subject, {
      firstName: activity.enrollment.firstName,
      companyName: activity.enrollment.companyName,
      email: activity.enrollment.contactEmail,
      dealName: activity.enrollment.dealName,
    });
    const renderedBody = this.renderVariables(template.body, {
      firstName: activity.enrollment.firstName,
      companyName: activity.enrollment.companyName,
      email: activity.enrollment.contactEmail,
      dealName: activity.enrollment.dealName,
    });

    await mailService.sendEmail({
      orgId: activity.orgId,
      userId: activity.enrollment.sequence.createdBy,
      to: activity.enrollment.contactEmail,
      subject: renderedSubject,
      body: renderedBody,
      isHtml: true,
      relatedDealId: activity.enrollment.dealId || undefined,
      relatedContactId: activity.enrollment.contactId || undefined,
    });
  }

  renderVariables(template: string, vars: Record<string, string | undefined>) {
    return template.replace(/{{\s*(firstName|companyName|email|dealName)\s*}}/g, (_, key: string) => vars[key] || "");
  }

  private async shouldStopForReply(orgId: string, enrollmentId: string) {
    const db = this.deps.db ?? prisma;
    const enrollment = await db.sequenceEnrollment.findUnique({ where: { id: enrollmentId } });
    if (!enrollment) return false;

    const reply = await db.email.findFirst({
      where: {
        orgId,
        direction: "inbound",
        fromEmail: enrollment.contactEmail.toLowerCase(),
        sentAt: { gte: enrollment.startedAt },
      },
    });

    return !!reply;
  }

  private async stopEnrollmentAsReplied(enrollmentId: string) {
    const db = this.deps.db ?? prisma;
    await db.sequenceEnrollment.update({
      where: { id: enrollmentId },
      data: { status: "replied", completedAt: new Date() },
    });

    await db.sequenceActivity.updateMany({
      where: { enrollmentId, status: "pending" },
      data: { status: "failed", errorMessage: "Stopped after contact reply" },
    });
  }

  private async setEnrollmentStatus(orgId: string, enrollmentId: string, status: string, markComplete = false) {
    const db = this.deps.db ?? prisma;
    const enrollment = await db.sequenceEnrollment.findFirst({ where: { id: enrollmentId, orgId } });
    if (!enrollment) throw new Error("Enrollment not found");

    return db.sequenceEnrollment.update({
      where: { id: enrollment.id },
      data: {
        status,
        ...(status === "unsubscribed" ? { unsubscribedAt: new Date() } : {}),
        ...(markComplete ? { completedAt: new Date() } : {}),
      },
    });
  }
}
