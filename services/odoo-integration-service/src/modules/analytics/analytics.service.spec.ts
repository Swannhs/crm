import { AnalyticsService } from './analytics.service';

describe('AnalyticsService', () => {
  const makeService = (odooClient: any) => new AnalyticsService(odooClient);

  it('aggregates revenue summary from invoices', async () => {
    const service = makeService({
      searchRead: jest.fn().mockResolvedValue([
        { amount_total: 100, amount_residual: 20, invoice_date: '2026-01-10' },
        { amount_total: 50, amount_residual: 0, invoice_date: '2026-01-20' },
      ]),
    });

    await expect(service.getRevenueSummary('2026-01-01', '2026-01-31')).resolves.toMatchObject({
      totalRevenue: 150,
      totalOutstanding: 20,
      totalPaid: 130,
      invoiceCount: 2,
      trend: [{ month: '2026-01', value: 150 }],
    });
  });

  it('computes conversion rate from lead/opportunity counts', async () => {
    const execute = jest.fn().mockResolvedValueOnce(20).mockResolvedValueOnce(5);
    const service = makeService({ execute, searchRead: jest.fn() });

    await expect(service.getConversionRate('2026-01-01', '2026-01-31')).resolves.toMatchObject({
      leads: 20,
      opportunities: 5,
      conversionRate: 25,
    });
  });

  it('groups pipeline opportunities by stage', async () => {
    const service = makeService({
      searchRead: jest.fn().mockResolvedValue([
        { stage_id: [1, 'New'] },
        { stage_id: [2, 'Qualified'] },
        { stage_id: [2, 'Qualified'] },
      ]),
    });

    await expect(service.getOrderDistribution('2026-01-01', '2026-02-01')).resolves.toEqual(
      expect.arrayContaining([
        { stage: 'New', count: 1 },
        { stage: 'Qualified', count: 2 },
      ]),
    );
  });

  it('calculates activity completion rate', async () => {
    const service = makeService({
      searchRead: jest.fn().mockResolvedValue([
        { state: 'done', activity_type_id: [1, 'Call'] },
        { state: 'planned', activity_type_id: [2, 'Email'] },
      ]),
    });

    await expect(service.getActivityMetrics('2026-01-01', '2026-01-31')).resolves.toMatchObject({
      totalActivities: 2,
      completedActivities: 1,
      completionRate: 50,
      byType: { call: 1, email: 1 },
    });
  });
});
