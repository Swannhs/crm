import test from "node:test";
import assert from "node:assert/strict";
import { SequenceService } from "./sequence.service.js";

test("enroll creates enrollment and schedules first step", async () => {
  const calls: any = { activityCreate: 0 };
  const db: any = {
    emailSequence: {
      findFirst: async () => ({ id: "s1", orgId: "o1", isActive: true, steps: [{ stepNumber: 1, type: "email", delayDays: 0, templateId: "t1" }] }),
      update: async () => ({}),
    },
    sequenceEnrollment: {
      create: async () => ({ id: "e1", orgId: "o1", sequenceId: "s1", status: "active", currentStep: 0 }),
      findUnique: async () => ({ id: "e1", orgId: "o1", status: "active", currentStep: 0, sequence: { steps: [{ stepNumber: 1, type: "email", delayDays: 0, templateId: "t1" }] } }),
    },
    sequenceActivity: {
      findFirst: async () => null,
      create: async () => {
        calls.activityCreate += 1;
      },
    },
  };

  const service = new SequenceService({ db });
  const enrollment = await service.enrollContact({ orgId: "o1", sequenceId: "s1", contactEmail: "x@example.com" });
  assert.equal(enrollment.id, "e1");
  assert.equal(calls.activityCreate, 1);
});

test("scheduleNextStep marks enrollment completed after final step", async () => {
  let completionUpdate: any;
  const db: any = {
    sequenceEnrollment: {
      findUnique: async () => ({ id: "e1", status: "active", currentStep: 2, sequence: { steps: [{ stepNumber: 1 }, { stepNumber: 2 }] } }),
      update: async (args: any) => {
        completionUpdate = args;
      },
    },
  };
  const service = new SequenceService({ db });
  await service.scheduleNextStep("e1");
  assert.equal(completionUpdate.data.status, "completed");
});

test("processPendingActivities sends email step and advances", async () => {
  const sent: any[] = [];
  const updates: any[] = [];
  const db: any = {
    sequenceActivity: {
      findMany: async () => [
        { id: "a1", orgId: "o1", enrollmentId: "e1", stepNumber: 1, type: "email", scheduledAt: new Date(), enrollment: { id: "e1", orgId: "o1", status: "active", startedAt: new Date(Date.now() - 1000), contactEmail: "lead@example.com", dealId: null, contactId: null, firstName: "Sam", companyName: "Acme", dealName: "Big Deal", sequence: { createdBy: "u1", steps: [{ stepNumber: 1, type: "email", templateId: "t1" }] } } },
      ],
      update: async (args: any) => updates.push(args),
      findFirst: async () => null,
      create: async () => ({}),
    },
    sequenceEnrollment: {
      update: async () => ({}),
      findUnique: async () => ({ id: "e1", orgId: "o1", status: "active", currentStep: 1, sequence: { steps: [{ stepNumber: 1, type: "email", templateId: "t1" }] } }),
    },
    emailTemplate: {
      findUnique: async () => ({ id: "t1", subject: "Hi {{firstName}}", body: "{{companyName}} {{email}} {{dealName}}" }),
    },
    email: {
      findFirst: async () => null,
    },
  };
  const mailService: any = { sendEmail: async (payload: any) => sent.push(payload) };

  const service = new SequenceService({ db, mailService });
  await service.processPendingActivities();

  assert.equal(sent.length, 1);
  assert.equal(sent[0].subject, "Hi Sam");
  assert.equal(sent[0].body, "Acme lead@example.com Big Deal");
  assert.equal(updates[0].data.status, "sent");
});

test("processPendingActivities marks failed step on send error", async () => {
  let updateCall: any;
  const db: any = {
    sequenceActivity: {
      findMany: async () => [
        { id: "a1", orgId: "o1", enrollmentId: "e1", stepNumber: 1, type: "email", scheduledAt: new Date(), enrollment: { id: "e1", orgId: "o1", status: "active", startedAt: new Date(Date.now() - 1000), contactEmail: "lead@example.com", sequence: { createdBy: "u1", steps: [{ stepNumber: 1, type: "email", templateId: "t1" }] } } },
      ],
      update: async (args: any) => {
        updateCall = args;
      },
    },
    emailTemplate: { findUnique: async () => ({ id: "t1", subject: "x", body: "y" }) },
    email: { findFirst: async () => null },
  };
  const mailService: any = { sendEmail: async () => { throw new Error("SMTP down"); } };

  const service = new SequenceService({ db, mailService });
  await service.processPendingActivities();
  assert.equal(updateCall.data.status, "failed");
  assert.match(updateCall.data.errorMessage, /SMTP down/);
});

test("pause/resume/cancel lifecycle", async () => {
  const statuses: string[] = [];
  const db: any = {
    sequenceEnrollment: {
      findFirst: async () => ({ id: "e1", orgId: "o1" }),
      findUnique: async () => ({ id: "e1", orgId: "o1", status: "paused" }),
      update: async (args: any) => {
        statuses.push(args.data.status);
        return { id: "e1", ...args.data };
      },
    },
    sequenceActivity: {
      findFirst: async () => null,
      updateMany: async () => ({}),
      create: async () => ({}),
    },
  };

  const service = new SequenceService({ db });
  await service.pauseEnrollment("o1", "e1");
  await service.resumeEnrollment("o1", "e1");
  await service.cancelEnrollment("o1", "e1");
  assert.deepEqual(statuses, ["paused", "active", "cancelled"]);
});

test("variable rendering supports expected placeholders", () => {
  const service = new SequenceService({});
  const rendered = service.renderVariables("{{firstName}} {{companyName}} {{email}} {{dealName}}", {
    firstName: "A",
    companyName: "B",
    email: "c@example.com",
    dealName: "D",
  });
  assert.equal(rendered, "A B c@example.com D");
});
