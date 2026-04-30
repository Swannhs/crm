-- Marketing advanced persistence

CREATE TABLE IF NOT EXISTS "MarketingSuppressionEntry" (
  "id" TEXT NOT NULL,
  "orgId" TEXT NOT NULL,
  "channel" TEXT NOT NULL,
  "value" TEXT NOT NULL,
  "reason" TEXT NOT NULL,
  "source" TEXT,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "MarketingSuppressionEntry_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "MarketingSuppressionEntry_orgId_channel_value_idx"
  ON "MarketingSuppressionEntry"("orgId", "channel", "value");

CREATE TABLE IF NOT EXISTS "MarketingContactConsent" (
  "id" TEXT NOT NULL,
  "orgId" TEXT NOT NULL,
  "contactId" TEXT NOT NULL,
  "emailOptIn" BOOLEAN,
  "smsOptIn" BOOLEAN,
  "unsubscribed" BOOLEAN NOT NULL DEFAULT false,
  "updatedByUser" TEXT,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "MarketingContactConsent_pkey" PRIMARY KEY ("id")
);

CREATE UNIQUE INDEX IF NOT EXISTS "MarketingContactConsent_orgId_contactId_key"
  ON "MarketingContactConsent"("orgId", "contactId");

CREATE INDEX IF NOT EXISTS "MarketingContactConsent_orgId_unsubscribed_idx"
  ON "MarketingContactConsent"("orgId", "unsubscribed");

CREATE TABLE IF NOT EXISTS "MarketingCampaignTemplateUsage" (
  "id" TEXT NOT NULL,
  "orgId" TEXT NOT NULL,
  "campaignId" TEXT NOT NULL,
  "templateId" TEXT NOT NULL,
  "templateVersionId" TEXT,
  "templateNameSnapshot" TEXT NOT NULL,
  "subjectSnapshot" TEXT,
  "previewTextSnapshot" TEXT,
  "contentSnapshot" TEXT,
  "appliedByUserId" TEXT,
  "appliedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "MarketingCampaignTemplateUsage_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "MarketingCampaignTemplateUsage_orgId_campaignId_appliedAt_idx"
  ON "MarketingCampaignTemplateUsage"("orgId", "campaignId", "appliedAt");

CREATE INDEX IF NOT EXISTS "MarketingCampaignTemplateUsage_orgId_templateId_appliedAt_idx"
  ON "MarketingCampaignTemplateUsage"("orgId", "templateId", "appliedAt");

CREATE TABLE IF NOT EXISTS "MarketingDeliveryEvent" (
  "id" TEXT NOT NULL,
  "orgId" TEXT NOT NULL,
  "campaignId" TEXT NOT NULL,
  "recipientId" TEXT,
  "recipientEmail" TEXT,
  "recipientPhone" TEXT,
  "provider" TEXT,
  "providerEventId" TEXT,
  "providerMessageId" TEXT,
  "eventType" TEXT NOT NULL,
  "url" TEXT,
  "reason" TEXT,
  "rawPayload" JSONB,
  "occurredAt" TIMESTAMP(3) NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "MarketingDeliveryEvent_pkey" PRIMARY KEY ("id")
);

CREATE INDEX IF NOT EXISTS "MarketingDeliveryEvent_orgId_campaignId_occurredAt_idx"
  ON "MarketingDeliveryEvent"("orgId", "campaignId", "occurredAt");

CREATE INDEX IF NOT EXISTS "MarketingDeliveryEvent_orgId_provider_providerEventId_idx"
  ON "MarketingDeliveryEvent"("orgId", "provider", "providerEventId");

CREATE INDEX IF NOT EXISTS "MarketingDeliveryEvent_orgId_provider_providerMessageId_idx"
  ON "MarketingDeliveryEvent"("orgId", "provider", "providerMessageId");
