import { db } from '../db.js';

export class CustomerRepository {
  async findByEmail(orgId: string, email: string) {
    return db.customer.findFirst({
      where: { orgId, email }
    });
  }

  async findByContactId(contactId: string) {
    return db.customer.findUnique({
      where: { contactId }
    });
  }

  async create(data: any) {
    return db.customer.create({
      data
    });
  }

  async findById(id: string) {
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
