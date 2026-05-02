import { BadRequestException } from '@nestjs/common';
import { CrmController } from './crm.controller';
import { CrmService } from './crm.service';

describe('CrmService', () => {
  const makeService = (odooClient: any) => new CrmService(odooClient);

  it('returns compatibility and Odoo-native opportunity fields', async () => {
    const service = makeService({
      searchRead: jest.fn().mockResolvedValue([
        {
          id: 42,
          name: 'Upgrade project',
          partner_id: [7, 'Acme Inc'],
          email_from: 'buyer@acme.test',
          phone: '555',
          probability: 50,
          planned_revenue: 1000,
          recurring_revenue_monthly: 25,
          stage_id: [3, 'Proposal'],
          user_id: [9, 'Alice'],
          priority: '1',
          date_deadline: '2026-06-01',
          create_date: '2026-05-01',
          write_date: '2026-05-02',
          type: 'opportunity',
          active: true,
          is_won: false,
          tag_ids: [],
          activity_summary: 'Call back',
          activity_date_deadline: '2026-05-03',
          activity_type_id: [2, 'Call'],
          activity_state: 'planned',
        },
      ]),
    });

    const result = await service.findOne(42);

    expect(result).toMatchObject({
      id: 42,
      odooId: 42,
      customerName: 'Acme Inc',
      customerId: 7,
      companyName: 'Acme Inc',
      stageId: 3,
      stageName: 'Proposal',
      stageStatus: 'proposal',
      status: 'proposal',
      expectedCloseDate: '2026-06-01',
      expectedRevenue: 1000,
      weightedValue: 500,
      partner: { id: 7, name: 'Acme Inc' },
      stage: { id: 3, name: 'Proposal', status: 'proposal' },
      user: { id: 9, name: 'Alice' },
      nextActivity: {
        summary: 'Call back',
        deadline: '2026-05-03',
        type: 'Call',
        state: 'planned',
      },
    });
  });

  it('archives opportunities instead of deleting them', async () => {
    const execute = jest.fn().mockResolvedValue(true);
    const service = makeService({ execute });

    await expect(service.remove(42)).resolves.toEqual({ id: 42, archived: true });
    expect(execute).toHaveBeenCalledWith('crm.lead', 'write', [[42], { active: false }]);
  });

  it('validates activity payloads and falls back to an available Odoo activity type', async () => {
    const execute = jest.fn().mockResolvedValue(99);
    const service = makeService({
      searchRead: jest.fn().mockResolvedValue([{ id: 5, name: 'To Do' }]),
      execute,
    });

    await expect(service.createActivity({ opportunityId: 42, type: 'followup', title: 'Follow up' })).resolves.toBe(99);
    expect(execute).toHaveBeenCalledWith('mail.activity', 'create', [
      expect.objectContaining({
        res_model: 'crm.lead',
        res_id: 42,
        summary: 'Follow up',
        activity_type_id: 5,
      }),
    ]);
  });

  it('rejects incomplete activity payloads before calling Odoo', async () => {
    const execute = jest.fn();
    const service = makeService({
      searchRead: jest.fn().mockResolvedValue([{ id: 5, name: 'To Do' }]),
      execute,
    });

    await expect(service.createActivity({ opportunityId: 'foo', title: 'Follow up' })).rejects.toBeInstanceOf(BadRequestException);
    await expect(service.createActivity({ opportunityId: 42, title: '' })).rejects.toBeInstanceOf(BadRequestException);
    expect(execute).not.toHaveBeenCalled();
  });
});

describe('CrmController ID parsing', () => {
  it('accepts prefixed Odoo IDs', async () => {
    const crmService = { findOne: jest.fn().mockResolvedValue({ id: 123 }) };
    const controller = new CrmController(crmService as any);

    await expect(controller.findOne('act-123')).resolves.toEqual({ id: 123 });
    expect(crmService.findOne).toHaveBeenCalledWith(123);
  });

  it('rejects non-numeric IDs with HTTP 400 semantics', async () => {
    const controller = new CrmController({ findOne: jest.fn() } as any);

    await expect(controller.findOne('foo')).rejects.toBeInstanceOf(BadRequestException);
  });
});
