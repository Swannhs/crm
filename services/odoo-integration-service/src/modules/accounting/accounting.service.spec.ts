import { BadRequestException } from '@nestjs/common';
import { AccountingService } from './accounting.service';

describe('AccountingService', () => {
  const makeService = (odooClient: any) => new AccountingService(odooClient);

  it('unlinks draft invoices and returns a deleted response', async () => {
    const execute = jest.fn().mockResolvedValue(true);
    const service = makeService({
      searchRead: jest.fn().mockResolvedValue([
        {
          id: 11,
          name: 'INV/11',
          partner_id: [3, 'Acme'],
          state: 'draft',
          payment_state: 'not_paid',
          invoice_line_ids: [],
        },
      ]),
      execute,
    });

    await expect(service.remove(11)).resolves.toEqual({ id: 11, deleted: true });
    expect(execute).toHaveBeenCalledWith('account.move', 'unlink', [[11]]);
  });

  it('protects posted invoices from deletion', async () => {
    const execute = jest.fn();
    const service = makeService({
      searchRead: jest.fn().mockResolvedValue([
        {
          id: 12,
          name: 'INV/12',
          partner_id: [3, 'Acme'],
          state: 'posted',
          payment_state: 'not_paid',
          invoice_line_ids: [],
        },
      ]),
      execute,
    });

    await expect(service.remove(12)).rejects.toBeInstanceOf(BadRequestException);
    expect(execute).not.toHaveBeenCalled();
  });
});
