import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { CustomerRepository } from '../repositories/customer.repository.js';

const JWT_SECRET = process.env.JWT_SECRET || 'local-dev-token-secret';
const CRM_SERVICE_URL = process.env.CRM_SERVICE_URL || 'http://crm-service:8010';

export class AuthService {
  private customerRepo = new CustomerRepository();

  async signup(orgId: string, data: any) {
    const { email, password, name, phone } = data;

    // 1. Check if customer already exists in commerce
    const existing = await this.customerRepo.findByEmail(orgId, email);
    if (existing) {
      throw new Error('Customer already exists');
    }

    // 2. Create contact in CRM service via HTTP
    // Laravel route might be /api/contacts or similar.
    // Based on legacy, let's assume a standard POST /api/contacts
    let contactId: string;
    try {
      const crmResponse = await axios.post(`${CRM_SERVICE_URL}/api/contacts`, {
        name,
        email,
        phone,
        org_id: orgId,
      }, {
        headers: { 'X-Org-Id': orgId }
      });
      contactId = crmResponse.data.data.id;
    } catch (err: any) {
      console.error('CRM Contact Creation Failed:', err.response?.data || err.message);
      throw new Error('Failed to create customer profile in CRM');
    }

    // 3. Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // 4. Create customer in Commerce
    const customer = await this.customerRepo.create({
      orgId,
      contactId,
      email,
      passwordHash,
      metadata: {}
    });

    // 5. Generate Token
    const token = jwt.sign(
      { id: customer.id, orgId, contactId, email, role: 'customer' },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return { customer, token };
  }

  async login(orgId: string, data: any) {
    const { email, password } = data;

    const customer = await this.customerRepo.findByEmail(orgId, email);
    if (!customer) {
      throw new Error('Invalid credentials');
    }

    const isValid = await bcrypt.compare(password, customer.passwordHash);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    const token = jwt.sign(
      { id: customer.id, orgId, contactId: customer.contactId, email: customer.email, role: 'customer' },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return { customer, token };
  }
}
