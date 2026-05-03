import { ContactsService } from './contacts.service';

describe('ContactsService', () => {
  const makeService = (odooClient: any, prisma: any = {}) =>
    new ContactsService(odooClient, prisma as any);

  it('archives contacts by setting active=false', async () => {
    const execute = jest.fn().mockResolvedValue(true);
    const service = makeService({ execute });

    await expect(service.remove(123)).resolves.toEqual({ id: 123, archived: true });
    expect(execute).toHaveBeenCalledWith('res.partner', 'write', [[123], { active: false }]);
  });

  it('archives companies by setting active=false', async () => {
    const execute = jest.fn().mockResolvedValue(true);
    const service = makeService({ execute });

    await service.removeCompany(456);
    expect(execute).toHaveBeenCalledWith('res.partner', 'write', [[456], { active: false }]);
  });

  it('links and unlinks contact to company using parent_id', async () => {
    const execute = jest.fn().mockResolvedValue(true);
    const service = makeService({ execute });

    await service.linkCompany(10, 20);
    await service.unlinkCompany(10);

    expect(execute).toHaveBeenNthCalledWith(1, 'res.partner', 'write', [[10], { parent_id: 20 }]);
    expect(execute).toHaveBeenNthCalledWith(2, 'res.partner', 'write', [[10], { parent_id: false }]);
  });
});
