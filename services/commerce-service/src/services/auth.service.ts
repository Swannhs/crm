import { createHmac, randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import { CustomerRepository } from '../repositories/customer.repository.js';

const JWT_SECRET = process.env.JWT_SECRET || 'local-dev-token-secret';
const CRM_SERVICE_URL = process.env.CRM_SERVICE_URL || 'http://crm-service:8010';

function hashPassword(password: string) {
  const salt = randomBytes(16).toString('hex');
  const hash = scryptSync(password, salt, 64).toString('hex');
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, storedHash: string) {
  const [salt, hash] = storedHash.split(':');
  if (!salt || !hash) return false;
  const derived = scryptSync(password, salt, 64);
  const stored = Buffer.from(hash, 'hex');
  if (derived.length !== stored.length) return false;
  return timingSafeEqual(derived, stored);
}

function base64Url(input: Buffer | string) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function signToken(payload: Record<string, unknown>, expiresInSeconds = 7 * 24 * 60 * 60) {
  const header = { alg: 'HS256', typ: 'JWT' };
  const now = Math.floor(Date.now() / 1000);
  const fullPayload = { ...payload, iat: now, exp: now + expiresInSeconds };
  const encodedHeader = base64Url(JSON.stringify(header));
  const encodedPayload = base64Url(JSON.stringify(fullPayload));
  const signature = createHmac('sha256', JWT_SECRET)
    .update(`${encodedHeader}.${encodedPayload}`)
    .digest();

  return `${encodedHeader}.${encodedPayload}.${base64Url(signature)}`;
}

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
      const crmResponse = await fetch(`${CRM_SERVICE_URL}/api/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Org-Id': orgId,
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          org_id: orgId,
        }),
      });
      if (!crmResponse.ok) {
        throw new Error(`CRM request failed with ${crmResponse.status}`);
      }
      const crmData = await crmResponse.json();
      contactId = crmData.data.id;
    } catch (err: any) {
      console.error('CRM Contact Creation Failed:', err.message);
      throw new Error('Failed to create customer profile in CRM');
    }

    // 3. Hash password
    const passwordHash = hashPassword(password);

    // 4. Create customer in Commerce
    const customer = await this.customerRepo.create({
      orgId,
      contactId,
      email,
      passwordHash,
      metadata: {}
    });

    // 5. Generate Token
    const token = signToken({ id: customer.id, orgId, contactId, email, role: 'customer' });

    return { customer, token };
  }

  async login(orgId: string, data: any) {
    const { email, password } = data;

    const customer = await this.customerRepo.findByEmail(orgId, email);
    if (!customer) {
      throw new Error('Invalid credentials');
    }

    const isValid = verifyPassword(password, customer.passwordHash);
    if (!isValid) {
      throw new Error('Invalid credentials');
    }

    const token = signToken({ id: customer.id, orgId, contactId: customer.contactId, email: customer.email, role: 'customer' });

    return { customer, token };
  }
}
