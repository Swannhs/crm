import { db } from '../db.js';
export class InvoiceRepository {
    client;
    constructor(client = db) {
        this.client = client;
    }
    async findManyByOrgId(orgId, params) {
        const where = { orgId };
        if (params.status) {
            where.status = params.status;
        }
        if (params.contactId) {
            where.contactId = params.contactId;
        }
        const [data, total] = await Promise.all([
            this.client.invoice.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                skip: params.skip,
                take: params.take,
                include: { payments: true },
            }),
            this.client.invoice.count({ where }),
        ]);
        return { data, total };
    }
    async findUnique(id, orgId) {
        return this.client.invoice.findFirst({
            where: { id, orgId },
            include: { payments: true },
        });
    }
    async create(data) {
        return this.client.invoice.create({ data });
    }
    async update(id, data) {
        return this.client.invoice.update({
            where: { id },
            data,
        });
    }
    async summarize(orgId) {
        const where = { orgId };
        const [aggregate, grouped] = await Promise.all([
            this.client.invoice.aggregate({
                where,
                _count: { _all: true },
                _sum: {
                    amountCents: true,
                    paidAmountCents: true,
                },
            }),
            this.client.invoice.groupBy({
                by: ['status'],
                where,
                _count: { _all: true },
                _sum: {
                    amountCents: true,
                    paidAmountCents: true,
                },
            }),
        ]);
        return { aggregate, grouped };
    }
}
