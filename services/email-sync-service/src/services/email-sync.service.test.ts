import test from "node:test";
import assert from "node:assert/strict";
import { EmailSyncService } from "./email-sync.service.js";
import { MailService } from "./mail.service.js";
import { GoogleAuthService } from "./google-auth.service.js";
import { OutlookAuthService } from "./outlook-auth.service.js";

test("MailService scopes account by orgId + userId", async () => {
  let capturedWhere: any;
  const db: any = {
    emailAccount: {
      findFirst: async (args: any) => {
        capturedWhere = args.where;
        return null;
      },
    },
    email: { create: async () => ({}) },
  };

  const service = new MailService({ db, decryptFn: () => "token" as any });
  await assert.rejects(
    () =>
      service.sendEmail({
        orgId: "org-1",
        userId: "user-1",
        accountId: "acc-other-user",
        to: "x@example.com",
        subject: "hi",
        body: "body",
      }),
    /No connected email account found/,
  );

  assert.equal(capturedWhere.orgId, "org-1");
  assert.equal(capturedWhere.userId, "user-1");
  assert.equal(capturedWhere.id, "acc-other-user");
});

test("EmailSyncService logs decrypt failure", async () => {
  const updates: any[] = [];
  let syncUpdate: any;
  const db: any = {
    emailAccount: {
      findFirst: async () => ({ id: "a1", orgId: "o1", userId: "u1", email: "u@example.com", provider: "gmail", refreshToken: "enc", lastSyncAt: null }),
      updateMany: async () => ({ count: 1 }),
      update: async (args: any) => updates.push(args),
    },
    syncLog: {
      create: async () => ({ id: "log1", startedAt: new Date() }),
      update: async (args: any) => {
        syncUpdate = args;
      },
    },
    email: {
      upsert: async () => ({}),
      findFirst: async () => null,
    },
  };

  const service = new EmailSyncService({ db, decryptFn: () => "" });
  await assert.rejects(() => service.syncAccountById("a1"), /Failed to decrypt token/);

  assert.equal(updates.at(-1).data.syncStatus, "error");
  assert.equal(syncUpdate.data.status, "error");
});

test("EmailSyncService upserts deduplicated provider messages and updates sync log", async () => {
  const upserts: any[] = [];
  const accountUpdates: any[] = [];
  let finalSync: any;

  const db: any = {
    emailAccount: {
      findFirst: async () => ({ id: "a1", orgId: "o1", userId: "u1", email: "me@example.com", provider: "gmail", refreshToken: "enc", lastSyncAt: null }),
      updateMany: async () => ({ count: 1 }),
      update: async (args: any) => accountUpdates.push(args),
    },
    syncLog: {
      create: async () => ({ id: "log1", startedAt: new Date(Date.now() - 50) }),
      update: async (args: any) => {
        finalSync = args;
      },
    },
    email: {
      upsert: async (args: any) => upserts.push(args),
      findFirst: async () => null,
    },
  };

  const gmail = {
    fetchMessages: async () => [
      { messageId: "m1", threadId: "t1", fromEmail: "x@example.com", toEmails: ["me@example.com"], subject: "a" },
      { messageId: "m1", threadId: "t1", fromEmail: "x@example.com", toEmails: ["me@example.com"], subject: "a" },
      { messageId: "m2", threadId: "t2", fromEmail: "me@example.com", toEmails: ["x@example.com"], subject: "b" },
    ],
  } as any;

  const service = new EmailSyncService({ db, decryptFn: () => "refresh", gmail });
  await service.syncAccountById("a1");

  assert.equal(upserts.length, 2);
  assert.equal(finalSync.data.status, "success");
  assert.equal(finalSync.data.emailsSynced, 2);
  assert.equal(finalSync.data.threadsSynced, 2);
  assert.equal(accountUpdates.at(-1).data.syncStatus, "idle");
  assert.ok(accountUpdates.at(-1).data.lastSyncAt instanceof Date);
});

test("Gmail parser extracts thread/message and attachments", () => {
  const service = new GoogleAuthService();
  const parsed = service.parseGmailMessage({
    id: "m1",
    threadId: "t1",
    snippet: "hello",
    labelIds: ["INBOX"],
    payload: {
      headers: [
        { name: "From", value: "Jane <jane@example.com>" },
        { name: "To", value: "Me <me@example.com>" },
        { name: "Subject", value: "Sub" },
      ],
      parts: [
        { mimeType: "text/plain", body: { data: Buffer.from("body").toString("base64") } },
        { filename: "a.pdf", mimeType: "application/pdf", body: { attachmentId: "att1", size: 42 } },
      ],
    },
  });

  assert.equal(parsed.messageId, "m1");
  assert.equal(parsed.threadId, "t1");
  assert.equal(parsed.attachmentCount, 1);
});

test("Outlook parser maps ids and recipients", () => {
  const service = new OutlookAuthService();
  const parsed = service.parseOutlookMessage({
    id: "m1",
    conversationId: "t1",
    subject: "Sub",
    from: { emailAddress: { name: "Jane", address: "jane@example.com" } },
    toRecipients: [{ emailAddress: { address: "me@example.com" } }],
    ccRecipients: [{ emailAddress: { address: "cc@example.com" } }],
    body: { contentType: "html", content: "<p>x</p>" },
    bodyPreview: "x",
    sentDateTime: new Date().toISOString(),
    receivedDateTime: new Date().toISOString(),
    hasAttachments: true,
    categories: ["cat"],
  });

  assert.equal(parsed.messageId, "m1");
  assert.equal(parsed.threadId, "t1");
  assert.equal(parsed.ccEmails[0], "cc@example.com");
});
