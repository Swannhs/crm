import { db } from '../db.js';
export class PaymentRepository {
    client;
    constructor(client = db) {
        this.client = client;
    }
    async findManyByOrgId(orgId, params) {
        const where = { orgId };
        const [data, total] = await Promise.all([
            this.client.payment.findMany({
                where,
                orderBy: { createdAt: 'desc' },
                skip: params.skip,
                take: params.take,
                include: { invoice: true },
            }),
            this.client.payment.count({ where }),
        ]);
        return { data, total };
    }
    async create(data) {
        return this.client.payment.create({ data });
    }
    async withTransaction(callback) {
        return db.$transaction(callback);
    }
}
