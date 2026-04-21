import prisma from '../db.js';
import type { Deal, Pipeline, Activity, Note, Task } from '@prisma/client';

export interface CreateDealInput {
  name: string;
  description?: string;
  amount: number;
  currency?: string;
  stage: string;
  probability?: number;
  expectedCloseDate?: Date;
  ownerId: string;
  contactId?: string;
  companyId?: string;
  pipelineId?: string;
  source?: string;
  priority?: string;
  tags?: string[];
  customFields?: Record<string, any>;
}

export interface UpdateDealInput extends Partial<CreateDealInput> {
  stage?: string;
  probability?: number;
  closeReason?: string;
  actualCloseDate?: Date;
}

export class DealRepository {
  async findById(id: string, orgId: string): Promise<Deal | null> {
    return prisma.deal.findUnique({
      where: { id, orgId },
      include: {
        contact: true,
        company: true,
        owner: true,
        activities: { orderBy: { createdAt: 'desc' }, take: 10 },
        notes: { orderBy: { createdAt: 'desc' }, take: 10 },
        tasks: { orderBy: { dueDate: 'asc' } }
      }
    });
  }

  async findByOrg(orgId: string, filters?: {
    stage?: string;
    ownerId?: string;
    contactId?: string;
    search?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ deals: Deal[]; total: number }> {
    const where: any = { orgId };
    
    if (filters?.stage) where.stage = filters.stage;
    if (filters?.ownerId) where.ownerId = filters.ownerId;
    if (filters?.contactId) where.contactId = filters.contactId;
    if (filters?.search) {
      where.OR = [
        { name: { contains: filters.search, mode: 'insensitive' } },
        { description: { contains: filters.search, mode: 'insensitive' } }
      ];
    }

    const [deals, total] = await Promise.all([
      prisma.deal.findMany({
        where,
        include: {
          contact: { select: { id: true, firstName: true, lastName: true, email: true } },
          company: { select: { id: true, name: true } },
          owner: { select: { id: true, name: true, email: true } }
        },
        orderBy: { createdAt: 'desc' },
        skip: filters?.offset || 0,
        take: filters?.limit || 50
      }),
      prisma.deal.count({ where })
    ]);

    return { deals, total };
  }

  async create(data: CreateDealInput, orgId: string): Promise<Deal> {
    return prisma.deal.create({
      data: {
        ...data,
        orgId,
        amount: String(data.amount),
        probability: data.probability || 0,
        currency: data.currency || 'USD',
        priority: data.priority || 'medium',
        tags: data.tags || []
      },
      include: {
        contact: true,
        company: true,
        owner: true
      }
    });
  }

  async update(id: string, orgId: string, data: UpdateDealInput): Promise<Deal> {
    const updateData: any = { ...data };
    
    // Auto-calculate closedAt when stage changes to closed_won or closed_lost
    if (data.stage && ['closed_won', 'closed_lost'].includes(data.stage)) {
      updateData.closedAt = new Date();
      if (!data.actualCloseDate) {
        updateData.actualCloseDate = new Date();
      }
    }

    // Convert amount to string for Prisma Decimal
    if (data.amount) {
      updateData.amount = String(data.amount);
    }

    return prisma.deal.update({
      where: { id, orgId },
      data: updateData,
      include: {
        contact: true,
        company: true,
        owner: true
      }
    });
  }

  async delete(id: string, orgId: string): Promise<void> {
    await prisma.deal.delete({
      where: { id, orgId }
    });
  }

  async getPipelineStats(orgId: string, pipelineId?: string): Promise<any[]> {
    const where: any = { orgId };
    if (pipelineId) where.pipelineId = pipelineId;

    const deals = await prisma.deal.groupBy({
      by: ['stage'],
      where,
      _count: { id: true },
      _sum: { amount: true }
    });

    return deals.map(d => ({
      stage: d.stage,
      count: d._count.id,
      totalAmount: d._sum.amount ? Number(d._sum.amount) : 0
    }));
  }

  async getForecast(orgId: string, ownerId?: string): Promise<{
    bestCase: number;
    commit: number;
    pipeline: number;
  }> {
    const where: any = { 
      orgId,
      stage: { notIn: ['closed_won', 'closed_lost'] }
    };
    
    if (ownerId) where.ownerId = ownerId;

    const deals = await prisma.deal.findMany({
      where,
      select: {
        amount: true,
        probability: true
      }
    });

    let bestCase = 0;
    let commit = 0;
    let pipeline = 0;

    deals.forEach(deal => {
      const amount = Number(deal.amount);
      const probability = deal.probability || 0;
      
      pipeline += amount;
      bestCase += amount * (probability / 100);
      
      if (probability >= 70) {
        commit += amount * (probability / 100);
      }
    });

    return {
      bestCase: Math.round(bestCase * 100) / 100,
      commit: Math.round(commit * 100) / 100,
      pipeline: Math.round(pipeline * 100) / 100
    };
  }
}

export const dealRepository = new DealRepository();
