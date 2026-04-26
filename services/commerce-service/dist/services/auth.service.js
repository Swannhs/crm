import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import { CustomerRepository } from '../repositories/customer.repository.js';
const JWT_SECRET = process.env.JWT_SECRET || 'local-dev-token-secret';
const CONTACT_PROFILE_SERVICE_URL = process.env.CONTACT_PROFILE_SERVICE_URL || process.env.ODOO_SERVICE_URL || 'http://odoo-integration-service:7200';
export class AuthService {
    customerRepo = new CustomerRepository();
    async signup(orgId, data) {
        const { email, password, name, phone } = data;
        // 1. Check if customer already exists in commerce
        const existing = await this.customerRepo.findByEmail(orgId, email);
        if (existing) {
            throw new Error('Customer already exists');
        }
        // 2. Create contact profile via integration service
        let contactId;
        try {
            const profileResponse = await axios.post(`${CONTACT_PROFILE_SERVICE_URL}/v1/odoo/contacts`, {
                name,
                email,
                phone,
                org_id: orgId,
            }, {
                headers: { 'X-Org-Id': orgId }
            });
            contactId = profileResponse.data?.data?.id;
            if (!contactId) {
                throw new Error('Contact profile id missing in response');
            }
        }
        catch (err) {
            console.error('Contact Profile Creation Failed:', err.response?.data || err.message);
            throw new Error('Failed to create customer profile');
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
        const token = jwt.sign({ id: customer.id, orgId, contactId, email, role: 'customer' }, JWT_SECRET, { expiresIn: '7d' });
        return { customer, token };
    }
    async login(orgId, data) {
        const { email, password } = data;
        const customer = await this.customerRepo.findByEmail(orgId, email);
        if (!customer) {
            throw new Error('Invalid credentials');
        }
        const isValid = await bcrypt.compare(password, customer.passwordHash);
        if (!isValid) {
            throw new Error('Invalid credentials');
        }
        const token = jwt.sign({ id: customer.id, orgId, contactId: customer.contactId, email: customer.email, role: 'customer' }, JWT_SECRET, { expiresIn: '7d' });
        return { customer, token };
    }
}
