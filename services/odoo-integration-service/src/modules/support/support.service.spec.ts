import { NotFoundException } from '@nestjs/common';
import { SupportService } from './support.service';

describe('SupportService', () => {
  const makeService = (prisma: any) => new SupportService(prisma as any);

  it('creates and updates tickets with SLA and assignee fields', async () => {
    const prisma = {
      supportTicket: {
        create: jest.fn().mockResolvedValue({ id: 't1', subject: 'Issue', priority: 'high' }),
        findFirst: jest.fn().mockResolvedValue({ id: 't1' }),
        update: jest.fn().mockResolvedValue({ id: 't1', status: 'in_progress', assigneeUserId: 'u2' }),
      },
    };

    const service = makeService(prisma);
    await expect(service.createTicket('org1', 'u1', { subject: 'Issue', priority: 'high', assigneeUserId: 'u2', slaDueAt: '2026-05-05T00:00:00.000Z' })).resolves.toMatchObject({ id: 't1' });
    await expect(service.updateTicket('org1', 't1', { status: 'in_progress', assigneeUserId: 'u2' })).resolves.toMatchObject({ id: 't1' });
  });

  it('adds internal notes and customer replies', async () => {
    const prisma = {
      supportTicket: { findFirst: jest.fn().mockResolvedValue({ id: 't1' }) },
      supportTicketNote: { create: jest.fn().mockResolvedValue({ id: 'n1', body: 'internal' }) },
      supportTicketReply: { create: jest.fn().mockResolvedValue({ id: 'r1', body: 'customer reply' }) },
    };
    const service = makeService(prisma);

    await expect(service.addInternalNote('org1', 't1', 'internal', 'u1')).resolves.toMatchObject({ id: 'n1' });
    await expect(service.addReply('org1', 't1', 'customer reply', 'u1', true)).resolves.toMatchObject({ id: 'r1' });
  });

  it('throws when updating unknown ticket', async () => {
    const prisma = {
      supportTicket: { findFirst: jest.fn().mockResolvedValue(null) },
    };
    const service = makeService(prisma);

    await expect(service.updateTicket('org1', 'missing', { status: 'closed' })).rejects.toBeInstanceOf(NotFoundException);
  });

  it('enforces tenant isolation by orgId on getTicket', async () => {
    const prisma = {
      supportTicket: { findFirst: jest.fn().mockResolvedValue(null) },
    };
    const service = makeService(prisma);

    await expect(service.getTicket('org-a', 'ticket-from-org-b')).rejects.toBeInstanceOf(NotFoundException);
  });
});
