import { db } from '../db.js';
export class CustomerRepository {
    async findByEmail(orgId, email) {
        return db.customer.findFirst({
            where: { orgId, email }
        });
    }
    async findByContactId(contactId) {
        return db.customer.findUnique({
            where: { contactId }
        });
    }
    async create(data) {
        return db.customer.create({
            data
        });
    }
    async findById(id) {
        return db.customer.findUnique({
            where: { id },
            include: {
                orders: {
                    orderBy: { createdAt: 'desc' },
                    take: 10
                }
            }
        });
    }
}
