import { dealRepository, type CreateDealInput, type UpdateDealInput } from '../repositories/deal.repository.js';
import type { Deal } from '@prisma/client';

export class DealService {
  async getDeal(id: string, orgId: string): Promise<Deal | null> {
    return dealRepository.findById(id, orgId);
  }

  async getDeals(orgId: string, filters?: {
    stage?: string;
    ownerId?: string;
    search?: string;
    limit?: number;
    offset?: number;
  }): Promise<{ deals: Deal[]; total: number }> {
    return dealRepository.findByOrg(orgId, filters);
  }

  async createDeal(data: CreateDealInput, orgId: string): Promise<Deal> {
    return dealRepository.create(data, orgId);
  }

  async updateDeal(id: string, orgId: string, data: UpdateDealInput): Promise<Deal> {
    return dealRepository.update(id, orgId, data);
  }

  async deleteDeal(id: string, orgId: string): Promise<void> {
    return dealRepository.delete(id, orgId);
  }

  async getPipelineStats(orgId: string, pipelineId?: string) {
    return dealRepository.getPipelineStats(orgId, pipelineId);
  }

  async getForecast(orgId: string, ownerId?: string) {
    return dealRepository.getForecast(orgId, ownerId);
  }

  async moveDealStage(id: string, orgId: string, stage: string): Promise<Deal> {
    const deal = await dealRepository.findById(id, orgId);
    if (!deal) {
      throw new Error('Deal not found');
    }

    // Auto-update probability based on stage
    const probabilityMap: Record<string, number> = {
      'prospect': 10,
      'qualification': 25,
      'proposal': 50,
      'negotiation': 75,
      'closed_won': 100,
      'closed_lost': 0
    };

    const probability = probabilityMap[stage] || deal.probability;

    return dealRepository.update(id, orgId, { 
      stage, 
      probability,
      actualCloseDate: ['closed_won', 'closed_lost'].includes(stage) ? new Date() : undefined
    });
  }
}

export const dealService = new DealService();
