import { db } from '../db.js';
export class OrderRepository {
    async findMany(orgId) {
        return db.order.findMany({
            where: { orgId },
            orderBy: { createdAt: 'desc' },
            include: { items: true }
        });
    }
    async findUnique(id, orgId) {
        return db.order.findFirst({
            where: { id, orgId },
            include: { items: true }
        });
    }
    async createWithItems(data, items) {
        return db.order.create({
            data: {
                ...data,
                items: {
                    create: items
                }
            },
            include: { items: true }
        });
    }
    async withTransaction(callback) {
        return db.$transaction(callback);
    }
}
