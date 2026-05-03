import { ScoresService } from './scores.service';

describe('ScoresService rule evaluation', () => {
  const makeService = () => {
    const prisma: any = {
      scoringRule: { findMany: jest.fn().mockResolvedValue([]), create: jest.fn(), updateMany: jest.fn() },
      contactScore: { upsert: jest.fn() },
      leadScore: { upsert: jest.fn(), findMany: jest.fn() },
      marketingDeliveryEvent: { findMany: jest.fn().mockResolvedValue([]) },
    };
    const odoo: any = { searchRead: jest.fn().mockResolvedValue([]) };
    return new ScoresService(prisma, odoo);
  };

  it('matches equals condition', () => {
    const service: any = makeService();
    const result = service.evalCondition({ hasProfile: true }, { field: 'hasProfile', operator: 'equals', value: true });
    expect(result.matched).toBe(true);
  });

  it('matches numeric threshold condition', () => {
    const service: any = makeService();
    const result = service.evalCondition({ daysSinceActivity: 7 }, { field: 'daysSinceActivity', operator: 'lte', value: 14 });
    expect(result.matched).toBe(true);
  });

  it('fails includes when value absent', () => {
    const service: any = makeService();
    const result = service.evalCondition({ stage: 'new' }, { field: 'stage', operator: 'includes', value: 'won' });
    expect(result.matched).toBe(false);
  });
});
