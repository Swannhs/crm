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

  it('applies invoice filters in list query domain', async () => {
    const searchRead = jest.fn().mockResolvedValue([]);
    const execute = jest.fn().mockResolvedValue(0);
    const service = makeService({ searchRead, execute });

    await service.findAllInvoices(
      { page: 1, pageSize: 20, search: 'INV' } as any,
      55,
      {
        state: 'posted',
        paymentState: 'not_paid',
        dateFrom: '2026-01-01',
        dateTo: '2026-12-31',
      },
    );

    const domain = searchRead.mock.calls[0][1];
    expect(domain).toEqual(
      expect.arrayContaining([
        ['move_type', 'in', ['out_invoice', 'out_refund']],
        ['partner_id', '=', 55],
        ['name', 'ilike', '%INV%'],
        ['state', '=', 'posted'],
        ['payment_state', '=', 'not_paid'],
        ['invoice_date', '>=', '2026-01-01'],
        ['invoice_date', '<=', '2026-12-31'],
      ]),
    );
  });

  it('renders invoice detail lines from account.move.line', async () => {
    const service = makeService({
      searchRead: jest
        .fn()
        .mockResolvedValueOnce([{
          id: 99,
          name: 'INV/99',
          partner_id: [3, 'Acme'],
          invoice_date: '2026-05-01',
          invoice_date_due: '2026-05-15',
          amount_total: 120,
          amount_untaxed: 100,
          amount_residual: 20,
          state: 'posted',
          payment_state: 'partial',
          move_type: 'out_invoice',
          invoice_line_ids: [1001],
          currency_id: [1, 'USD'],
        }])
        .mockResolvedValueOnce([{
          id: 1001,
          name: 'Consulting',
          quantity: 2,
          price_unit: 50,
          price_subtotal: 100,
          price_total: 120,
          product_id: [8, 'Service'],
        }]),
    });

    const invoice = await service.findOne(99);
    expect(invoice?.lines).toEqual([
      expect.objectContaining({
        id: 1001,
        name: 'Consulting',
        quantity: 2,
        priceUnit: 50,
        priceSubtotal: 100,
        priceTotal: 120,
        productName: 'Service',
      }),
    ]);
  });
});
