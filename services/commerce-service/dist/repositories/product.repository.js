import { db } from '../db.js';
export class ProductRepository {
    async findMany(orgId) {
        return db.product.findMany({
            where: { orgId },
            orderBy: { name: 'asc' }
        });
    }
    async findUnique(id, orgId) {
        return db.product.findFirst({
            where: { id, orgId }
        });
    }
    async create(data) {
        return db.product.create({ data });
    }
    async update(id, data) {
        return db.product.update({
            where: { id },
            data
        });
    }
    async delete(id) {
        return db.product.delete({ where: { id } });
    }
}
