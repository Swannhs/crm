import prisma from '../db.js';
import type { Prisma, ScoringModel, ScoringRule, LeadScore } from '../../generated/prisma/index.js';

export type ScoringModelWithRules = ScoringModel & { rules: ScoringRule[] };

export interface CreateScoringModelInput {
  name: string;
  description?: string;
  thresholds?: Record<string, number>;
  isActive?: boolean;
  rules: Array<{
    name: string;
    entityType?: string;
    conditions: Prisma.InputJsonValue;
    points: number;
    isActive?: boolean;
    priority?: number;
  }>;
}

export interface ScoreFactors {
  matchedRules: Array<{
    ruleId: string;
    ruleName: string;
    points: number;
    conditionCount: number;
  }>;
  totalRulesEvaluated: number;
  totalRulesMatched: number;
}

export class ScoringRepository {
  async listModels(orgId: string): Promise<ScoringModelWithRules[]> {
    return prisma.scoringModel.findMany({
      where: { orgId },
      include: {
        rules: {
          orderBy: [{ priority: 'desc' }, { createdAt: 'asc' }]
        }
      },
      orderBy: [{ isActive: 'desc' }, { updatedAt: 'desc' }]
    });
  }

  async findModelById(id: string, orgId: string): Promise<ScoringModelWithRules | null> {
    return prisma.scoringModel.findFirst({
      where: { id, orgId },
      include: {
        rules: {
          where: { isActive: true },
          orderBy: [{ priority: 'desc' }, { createdAt: 'asc' }]
        }
      }
    });
  }

  async findActiveModel(orgId: string): Promise<ScoringModelWithRules | null> {
    return prisma.scoringModel.findFirst({
      where: { orgId, isActive: true },
      include: {
        rules: {
          where: { isActive: true },
          orderBy: [{ priority: 'desc' }, { createdAt: 'asc' }]
        }
      },
      orderBy: [{ updatedAt: 'desc' }]
    });
  }

  async createModel(orgId: string, input: CreateScoringModelInput): Promise<ScoringModelWithRules> {
    const model = await prisma.scoringModel.create({
      data: {
        orgId,
        name: input.name,
        description: input.description,
        thresholds: (input.thresholds ?? { A: 80, B: 60, C: 40, D: 20 }) as Prisma.InputJsonValue,
        isActive: input.isActive ?? true,
        rules: {
          create: input.rules.map((rule) => ({
            orgId,
            name: rule.name,
            entityType: rule.entityType ?? 'contact',
            conditions: rule.conditions,
            points: rule.points,
            isActive: rule.isActive ?? true,
            priority: rule.priority ?? 0
          }))
        }
      },
      include: {
        rules: {
          orderBy: [{ priority: 'desc' }, { createdAt: 'asc' }]
        }
      }
    });

    return model as ScoringModelWithRules;
  }

  async upsertLeadScore(args: {
    orgId: string;
    contactId: string;
    modelId: string;
    score: number;
    grade: string;
    factors: Prisma.InputJsonValue;
  }): Promise<LeadScore> {
    const existing = await prisma.leadScore.findUnique({
      where: {
        orgId_contactId_modelId: {
          orgId: args.orgId,
          contactId: args.contactId,
          modelId: args.modelId
        }
      }
    });

    return prisma.leadScore.upsert({
      where: {
        orgId_contactId_modelId: {
          orgId: args.orgId,
          contactId: args.contactId,
          modelId: args.modelId
        }
      },
      create: {
        ...args,
        previousScore: existing?.score ?? null,
        changedAt: new Date()
      },
      update: {
        score: args.score,
        grade: args.grade,
        factors: args.factors,
        previousScore: existing?.score ?? null,
        changedAt: new Date()
      }
    });
  }

  async getLeadScore(orgId: string, contactId: string, modelId?: string): Promise<LeadScore | null> {
    if (!modelId) {
      const activeModel = await this.findActiveModel(orgId);
      if (!activeModel) {
        return null;
      }
      modelId = activeModel.id;
    }

    return prisma.leadScore.findFirst({
      where: { orgId, contactId, modelId },
      orderBy: [{ changedAt: 'desc' }]
    });
  }

  async getHotLeads(orgId: string, minimumScore: number, limit: number): Promise<LeadScore[]> {
    return prisma.leadScore.findMany({
      where: {
        orgId,
        score: { gte: minimumScore }
      },
      orderBy: [{ score: 'desc' }, { changedAt: 'desc' }],
      take: limit
    });
  }
}

export const scoringRepository = new ScoringRepository();
