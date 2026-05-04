-- CreateTable
CREATE TABLE "omni_agents" (
    "id" UUID NOT NULL,
    "organizationId" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "displayName" TEXT,
    "email" TEXT,
    "status" TEXT NOT NULL DEFAULT 'available',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "omni_agents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "omni_agent_tasks" (
    "id" UUID NOT NULL,
    "organizationId" UUID NOT NULL,
    "agentId" UUID NOT NULL,
    "conversationId" UUID,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "priority" TEXT NOT NULL DEFAULT 'normal',
    "due_at" TIMESTAMP(3),
    "metadata" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "omni_agent_tasks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "omni_agents_organizationId_userId_key" ON "omni_agents"("organizationId", "userId");

-- CreateIndex
CREATE INDEX "omni_agents_organizationId_idx" ON "omni_agents"("organizationId");

-- CreateIndex
CREATE INDEX "omni_agents_userId_idx" ON "omni_agents"("userId");

-- CreateIndex
CREATE INDEX "omni_agent_tasks_organizationId_idx" ON "omni_agent_tasks"("organizationId");

-- CreateIndex
CREATE INDEX "omni_agent_tasks_agentId_idx" ON "omni_agent_tasks"("agentId");

-- CreateIndex
CREATE INDEX "omni_agent_tasks_conversationId_idx" ON "omni_agent_tasks"("conversationId");
