import { prisma } from "../lib/prisma.js";
import { decrypt } from "../lib/encryption.js";
import { GoogleAuthService } from "./google-auth.service.js";
import { OutlookAuthService } from "./outlook-auth.service.js";

const googleAuth = new GoogleAuthService();
const outlookAuth = new OutlookAuthService();

type Account = {
  id: string;
  orgId: string;
  userId: string;
  email: string;
  provider: string;
  refreshToken: string | null;
  lastSyncAt: Date | null;
  syncStatus: string;
};

export class EmailSyncService {
  constructor(
    private readonly deps: {
      db?: typeof prisma;
      decryptFn?: typeof decrypt;
      gmail?: GoogleAuthService;
      outlook?: OutlookAuthService;
    } = {},
  ) {}

  async syncEligibleAccounts() {
    const db = this.deps.db ?? prisma;
    const accounts = await db.emailAccount.findMany({
      where: {
        isConnected: true,
        OR: [{ syncStatus: "idle" }, { syncStatus: "error" }],
      },
    });

    for (const account of accounts) {
      await this.syncAccountById(account.id);
    }
  }

  async syncAccountById(accountId: string, scope?: { orgId?: string; userId?: string }) {
    const db = this.deps.db ?? prisma;
    const account = await db.emailAccount.findFirst({
      where: {
        id: accountId,
        ...(scope?.orgId ? { orgId: scope.orgId } : {}),
        ...(scope?.userId ? { userId: scope.userId } : {}),
      },
    }) as Account | null;

    if (!account) {
      throw new Error("Email account not found");
    }

    const lockResult = await db.emailAccount.updateMany({
      where: { id: account.id, syncStatus: { not: "syncing" } },
      data: { syncStatus: "syncing", errorMessage: null },
    });

    if (lockResult.count === 0) {
      throw new Error("Account is already syncing");
    }

    const syncLog = await db.syncLog.create({
      data: {
        orgId: account.orgId,
        accountId: account.id,
        status: "in_progress",
      },
    });

    try {
      if (!account.refreshToken) {
        throw new Error("No refresh token available");
      }

      const decryptFn = this.deps.decryptFn ?? decrypt;
      const refreshToken = decryptFn(account.refreshToken);
      if (!refreshToken) {
        throw new Error("Failed to decrypt token");
      }

      const fetchedMessages = await this.fetchProviderMessages(account, refreshToken);
      const result = await this.saveMessages(account, fetchedMessages);

      await db.emailAccount.update({
        where: { id: account.id },
        data: {
          syncStatus: "idle",
          lastSyncAt: new Date(),
          errorMessage: null,
        },
      });

      await db.syncLog.update({
        where: { id: syncLog.id },
        data: {
          status: "success",
          emailsSynced: result.emailsSynced,
          threadsSynced: result.threadsSynced,
          completedAt: new Date(),
          duration: Date.now() - syncLog.startedAt.getTime(),
        },
      });

      return { accountId: account.id, ...result };
    } catch (error: any) {
      await db.emailAccount.update({
        where: { id: account.id },
        data: {
          syncStatus: "error",
          errorMessage: error.message || "Unknown error",
        },
      });

      await db.syncLog.update({
        where: { id: syncLog.id },
        data: {
          status: "error",
          errors: [error.message || "Unknown error"],
          completedAt: new Date(),
          duration: Date.now() - syncLog.startedAt.getTime(),
        },
      });
      throw error;
    }
  }

  private async fetchProviderMessages(account: Account, refreshToken: string) {
    const gmailClient = this.deps.gmail ?? googleAuth;
    const outlookClient = this.deps.outlook ?? outlookAuth;

    if (account.provider === "gmail") {
      return gmailClient.fetchMessages(refreshToken, account.lastSyncAt ?? undefined);
    }
    if (account.provider === "outlook") {
      return outlookClient.fetchMessages(refreshToken, account.lastSyncAt ?? undefined);
    }
    throw new Error(`Unsupported provider: ${account.provider}`);
  }

  private async saveMessages(account: Account, messages: any[]) {
    const db = this.deps.db ?? prisma;
    const seen = new Set<string>();
    let emailsSynced = 0;
    const touchedThreads = new Set<string>();

    for (const msg of messages) {
      if (!msg?.messageId || seen.has(msg.messageId)) continue;
      seen.add(msg.messageId);

      const direction = msg.fromEmail?.toLowerCase() === account.email.toLowerCase() ? "outbound" : "inbound";
      const toEmails = (msg.toEmails ?? []).filter(Boolean);
      const ccEmails = (msg.ccEmails ?? []).filter(Boolean);
      const bccEmails = (msg.bccEmails ?? []).filter(Boolean);

      const assoc = await this.resolveAssociations(account.orgId, msg.fromEmail, [...toEmails, ...ccEmails, ...bccEmails]);

      await db.email.upsert({
        where: { accountId_messageId: { accountId: account.id, messageId: msg.messageId } },
        update: {
          threadId: msg.threadId,
          subject: msg.subject,
          fromName: msg.fromName,
          fromEmail: msg.fromEmail,
          toEmails,
          ccEmails,
          bccEmails,
          textBody: msg.textBody,
          htmlBody: msg.htmlBody,
          snippet: msg.snippet,
          hasAttachments: !!msg.hasAttachments,
          attachmentCount: msg.attachmentCount ?? 0,
          attachmentMetadata: msg.attachmentMetadata,
          labels: msg.labels || [],
          isRead: !!msg.isRead,
          sentAt: msg.sentAt || new Date(),
          receivedAt: msg.receivedAt || new Date(),
          relatedContactId: msg.relatedContactId || assoc.relatedContactId,
          relatedDealId: msg.relatedDealId || assoc.relatedDealId,
          rawHeaders: msg.rawHeaders,
          inReplyTo: msg.inReplyTo,
          references: msg.references || [],
          updatedAt: new Date(),
        },
        create: {
          orgId: account.orgId,
          accountId: account.id,
          messageId: msg.messageId,
          threadId: msg.threadId,
          subject: msg.subject,
          fromName: msg.fromName,
          fromEmail: msg.fromEmail,
          toEmails,
          ccEmails,
          bccEmails,
          textBody: msg.textBody,
          htmlBody: msg.htmlBody,
          snippet: msg.snippet,
          hasAttachments: !!msg.hasAttachments,
          attachmentCount: msg.attachmentCount ?? 0,
          attachmentMetadata: msg.attachmentMetadata,
          labels: msg.labels || [],
          isRead: !!msg.isRead,
          direction,
          sentAt: msg.sentAt || new Date(),
          receivedAt: msg.receivedAt || new Date(),
          relatedContactId: msg.relatedContactId || assoc.relatedContactId,
          relatedDealId: msg.relatedDealId || assoc.relatedDealId,
          rawHeaders: msg.rawHeaders,
          inReplyTo: msg.inReplyTo,
          references: msg.references || [],
        },
      });

      if (msg.threadId) {
        touchedThreads.add(msg.threadId);
      }
      emailsSynced += 1;
    }

    return { emailsSynced, threadsSynced: touchedThreads.size };
  }

  private async resolveAssociations(orgId: string, fromEmail?: string, recipients: string[] = []) {
    const db = this.deps.db ?? prisma;
    const candidates = [fromEmail, ...recipients].filter((e): e is string => !!e).map((e) => e.toLowerCase());
    if (candidates.length === 0) {
      return { relatedContactId: undefined, relatedDealId: undefined };
    }

    const existing = await db.email.findFirst({
      where: {
        orgId,
        AND: [
          {
            OR: [
          { fromEmail: { in: candidates } },
          { toEmails: { hasSome: candidates } },
            ],
          },
          {
            OR: [{ relatedContactId: { not: null } }, { relatedDealId: { not: null } }],
          },
        ],
      },
      orderBy: { sentAt: "desc" },
      select: { relatedContactId: true, relatedDealId: true },
    });

    return {
      relatedContactId: existing?.relatedContactId ?? undefined,
      relatedDealId: existing?.relatedDealId ?? undefined,
    };
  }
}
