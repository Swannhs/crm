CREATE TABLE "scoring_models" (
  "id" TEXT NOT NULL,
  "orgId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "thresholds" JSONB NOT NULL,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "scoring_models_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "scoring_rules" (
  "id" TEXT NOT NULL,
  "orgId" TEXT NOT NULL,
  "modelId" TEXT NOT NULL,
  "name" TEXT NOT NULL,
  "entityType" TEXT NOT NULL DEFAULT 'contact',
  "conditions" JSONB NOT NULL,
  "points" INTEGER NOT NULL,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "priority" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "scoring_rules_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "lead_scores" (
  "id" TEXT NOT NULL,
  "orgId" TEXT NOT NULL,
  "contactId" TEXT NOT NULL,
  "modelId" TEXT NOT NULL,
  "score" INTEGER NOT NULL,
  "grade" TEXT NOT NULL,
  "factors" JSONB NOT NULL,
  "previousScore" INTEGER,
  "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,

  CONSTRAINT "lead_scores_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "scoring_models_orgId_idx" ON "scoring_models"("orgId");
CREATE INDEX "scoring_models_orgId_isActive_idx" ON "scoring_models"("orgId", "isActive");

CREATE INDEX "scoring_rules_orgId_idx" ON "scoring_rules"("orgId");
CREATE INDEX "scoring_rules_modelId_isActive_priority_idx" ON "scoring_rules"("modelId", "isActive", "priority");

CREATE INDEX "lead_scores_orgId_idx" ON "lead_scores"("orgId");
CREATE INDEX "lead_scores_orgId_score_idx" ON "lead_scores"("orgId", "score");
CREATE INDEX "lead_scores_orgId_grade_idx" ON "lead_scores"("orgId", "grade");
CREATE UNIQUE INDEX "lead_scores_orgId_contactId_modelId_key" ON "lead_scores"("orgId", "contactId", "modelId");

ALTER TABLE "scoring_rules"
  ADD CONSTRAINT "scoring_rules_modelId_fkey"
  FOREIGN KEY ("modelId") REFERENCES "scoring_models"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "lead_scores"
  ADD CONSTRAINT "lead_scores_modelId_fkey"
  FOREIGN KEY ("modelId") REFERENCES "scoring_models"("id")
  ON DELETE CASCADE ON UPDATE CASCADE;
