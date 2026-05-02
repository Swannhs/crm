import { prisma } from "../lib/prisma.js";

import { decrypt } from "../lib/encryption.js";



export class EmailSyncWorker {
  private isRunning = false;
  private intervalId: NodeJS.Timeout | null = null;
  private syncIntervalMs = 5 * 60 * 1000; // 5 minutes

  start() {
    if (this.isRunning) return;
    this.isRunning = true;
    
    console.log("Starting Email Sync Worker...");
    // Run immediately
    this.runSync();
    
    // Then run on interval
    this.intervalId = setInterval(() => this.runSync(), this.syncIntervalMs);
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

      // Placeholder for actual message fetching logic
      // In a real implementation, you would:
      // 1. Exchange refresh token for access token
      // 2. Fetch messages since lastSyncAt
      // 3. Save messages to DB
      // 4. Update syncLog with counts
      
      let emailsSynced = 0;
      
      if (account.provider === 'gmail') {
         // gmail sync logic placeholder
         // emailsSynced = await this.syncGmail(account, refreshToken);
      } else if (account.provider === 'outlook') {
         // outlook sync logic placeholder
         // emailsSynced = await this.syncOutlook(account, refreshToken);
      }

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
}
