import { prisma } from "../lib/prisma.js";
import { decrypt } from "../lib/encryption.js";
import { GoogleAuthService } from "../services/google-auth.service.js";
import { OutlookAuthService } from "../services/outlook-auth.service.js";
import { SequenceService } from "../services/sequence.service.js";

const googleAuth = new GoogleAuthService();
const outlookAuth = new OutlookAuthService();
const sequenceService = new SequenceService();

export class EmailSyncWorker {
  private isRunning = false;
  private intervalId: NodeJS.Timeout | null = null;
  private syncIntervalMs = 5 * 60 * 1000; // 5 minutes

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    
    console.log("Starting Email Sync Worker...");
    // Run immediately
    this.runSync().catch(err => console.error("Initial sync failed:", err));
    
    // Process sequences immediately too
    this.runSequenceProcessing().catch(err => console.error("Initial sequence processing failed:", err));
    
    // Then run on interval
    this.intervalId = setInterval(async () => {
      await this.runSync();
      await this.runSequenceProcessing();
    }, this.syncIntervalMs);
  }

  private async runSequenceProcessing() {
    try {
      await sequenceService.processPendingActivities();
    } catch (error) {
      console.error("Error in sequence processing:", error);
    }
  }

  stop() {
    this.isRunning = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    console.log("Email Sync Worker stopped.");
  }

  private async runSync() {
    try {
      // Find accounts that need syncing
      const accounts = await prisma.emailAccount.findMany({
        where: {
          isConnected: true,
          OR: [
            { syncStatus: "idle" },
            { syncStatus: "error" }
          ]
        }
      });

      for (const account of accounts) {
        await this.syncAccount(account);
      }
    } catch (error) {
      console.error("Error in sync worker run:", error);
    }
  }

  private async syncAccount(account: any) {
    console.log(`Syncing account ${account.email} (${account.provider})`);
    
    // Update status
    await prisma.emailAccount.update({
      where: { id: account.id },
      data: { syncStatus: "syncing" }
    });

    const syncLog = await prisma.syncLog.create({
      data: {
        orgId: account.orgId,
        accountId: account.id,
        status: "in_progress"
      }
    });

    try {
      if (!account.refreshToken) {
        throw new Error("No refresh token available");
      }
      
      const refreshToken = decrypt(account.refreshToken);
      if (!refreshToken) {
        throw new Error("Failed to decrypt token");
      }

      let fetchedMessages: any[] = [];
      
      if (account.provider === 'gmail') {
         fetchedMessages = await googleAuth.fetchMessages(refreshToken, account.lastSyncAt);
      } else if (account.provider === 'outlook') {
         fetchedMessages = await outlookAuth.fetchMessages(refreshToken, account.lastSyncAt);
      }

      const emailsSynced = await this.saveMessages(account, fetchedMessages);

      // Mark success
      await prisma.emailAccount.update({
        where: { id: account.id },
        data: { 
          syncStatus: "idle", 
          lastSyncAt: new Date(),
          errorMessage: null 
        }
      });

      await prisma.syncLog.update({
        where: { id: syncLog.id },
        data: {
          status: "success",
          emailsSynced,
          completedAt: new Date(),
          duration: Date.now() - syncLog.startedAt.getTime()
        }
      });
      
    } catch (error: any) {
      console.error(`Error syncing account ${account.email}:`, error);
      
      await prisma.emailAccount.update({
        where: { id: account.id },
        data: { 
          syncStatus: "error",
          errorMessage: error.message || "Unknown error"
        }
      });

      await prisma.syncLog.update({
        where: { id: syncLog.id },
        data: {
          status: "error",
          errors: [error.message || "Unknown error"],
          completedAt: new Date(),
          duration: Date.now() - syncLog.startedAt.getTime()
        }
      });
    }
  }

  private async saveMessages(account: any, messages: any[]) {
    let count = 0;
    for (const msg of messages) {
      // Determine direction
      const direction = msg.fromEmail?.toLowerCase() === account.email.toLowerCase() ? "outbound" : "inbound";

      await prisma.email.upsert({
        where: { messageId: msg.messageId },
        update: {
          subject: msg.subject,
          textBody: msg.textBody,
          htmlBody: msg.htmlBody,
          snippet: msg.snippet,
          isRead: msg.isRead,
          labels: msg.labels,
          updatedAt: new Date()
        },
        create: {
          orgId: account.orgId,
          accountId: account.id,
          messageId: msg.messageId,
          threadId: msg.threadId,
          subject: msg.subject,
          fromName: msg.fromName,
          fromEmail: msg.fromEmail,
          toEmails: msg.toEmails,
          textBody: msg.textBody,
          htmlBody: msg.htmlBody,
          snippet: msg.snippet,
          isRead: msg.isRead || false,
          direction,
          sentAt: msg.sentAt || new Date(),
          receivedAt: msg.receivedAt || new Date(),
          labels: msg.labels || []
        }
      });
      count++;
    }
    return count;
  }
}
