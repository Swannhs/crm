import { prisma } from "../lib/prisma.js";
import { decrypt } from "../lib/encryption.js";
import { GoogleAuthService } from "./google-auth.service.js";
import { OutlookAuthService } from "./outlook-auth.service.js";

const googleAuth = new GoogleAuthService();
const outlookAuth = new OutlookAuthService();

export class MailService {
  constructor(
    private readonly deps: {
      db?: typeof prisma;
      decryptFn?: typeof decrypt;
      gmail?: GoogleAuthService;
      outlook?: OutlookAuthService;
    } = {}
  ) {}

  async sendEmail(params: {
    orgId: string,
    userId: string,
    accountId?: string,
    to: string | string[],
    subject: string,
    body: string,
    cc?: string | string[],
    bcc?: string | string[],
    isHtml?: boolean,
    relatedDealId?: string,
    relatedContactId?: string
  }) {
    const { orgId, userId, accountId, to, subject, body, cc, bcc, isHtml, relatedDealId, relatedContactId } = params;

    const db = this.deps.db ?? prisma;
    const decryptFn = this.deps.decryptFn ?? decrypt;
    const gmailClient = this.deps.gmail ?? googleAuth;
    const outlookClient = this.deps.outlook ?? outlookAuth;

    let account;
    if (accountId) {
      account = await db.emailAccount.findFirst({
        where: { id: accountId, orgId, userId, isConnected: true }
      });
    } else {
      account = await db.emailAccount.findFirst({
        where: { orgId, userId, isConnected: true },
        orderBy: { createdAt: "desc" }
      });
    }

    if (!account || !account.refreshToken) {
      throw new Error("No connected email account found");
    }

    const decryptedRefreshToken = decryptFn(account.refreshToken);
    if (!decryptedRefreshToken) {
      throw new Error("Failed to decrypt authentication tokens");
    }

    let sendResult: any = {};
    if (account.provider === "gmail") {
      sendResult = await gmailClient.sendEmail(decryptedRefreshToken, { to, subject, body, cc, bcc, isHtml });
    } else if (account.provider === "outlook") {
      sendResult = await outlookClient.sendEmail(decryptedRefreshToken, { to, subject, body, cc, bcc, isHtml });
    }

    const messageId = sendResult.id || `sent-${Date.now()}`;

    // Persist to database
    const emailRecord = await db.email.create({
      data: {
        orgId,
        accountId: account.id,
        messageId,
        subject,
        fromEmail: account.email,
        fromName: account.email, // Best guess
        toEmails: Array.isArray(to) ? to : [to],
        ccEmails: cc ? (Array.isArray(cc) ? cc : [cc]) : [],
        bccEmails: bcc ? (Array.isArray(bcc) ? bcc : [bcc]) : [],
        textBody: isHtml ? undefined : body,
        htmlBody: isHtml ? body : undefined,
        direction: "outbound",
        sentAt: new Date(),
        receivedAt: new Date(),
        relatedDealId,
        relatedContactId
      },
    });

    return emailRecord;
  }
}
