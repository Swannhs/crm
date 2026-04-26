const http = require('http');

const CONFIG = {
  orgId: 'd6b9ea2a-7e1e-4b9a-9e1e-5a0a38d7b384',
  services: {
    organization: { host: 'localhost', port: 7010 },
    odoo: { host: 'localhost', port: 7200 }
  },
  users: [
    { id: '9d2fe3af-50db-4c93-ac57-ce1df1a7456a', username: 'org-owner', role: 'org_owner' },
    { id: '78238532-a2b3-4a6c-9cce-dff36acafd4d', username: 'org-staff', role: 'org_staff' }
  ]
};

const DUMMY_DATA = {
  contacts: [
    { name: 'John Doe', email: 'john@acme.com', phone: '+123456789', is_company: false },
    { name: 'Acme Corp', email: 'contact@acme.com', is_company: true, street: '123 Business Ave', city: 'Tech City' },
    { name: 'Jane Smith', email: 'jane@globex.com', is_company: false }
  ],
  leads: [
    { name: 'Large ERP Implementation', email_from: 'john@acme.com', planned_revenue: 50000, probability: 30 },
    { name: 'Custom CRM Plugin', email_from: 'jane@globex.com', planned_revenue: 15000, probability: 70 }
  ],
  products: [
    { name: 'Enterprise License', list_price: 5000, standard_price: 2000, default_code: 'LIC-ENT' },
    { name: 'Cloud Storage (1TB)', list_price: 100, standard_price: 30, default_code: 'STG-1TB' }
  ]
};

async function request(serviceName, method, path, data, headers = {}) {
  return new Promise((resolve, reject) => {
    const body = data ? JSON.stringify(data) : '';
    const service = CONFIG.services[serviceName];

    const req = http.request({
      hostname: service.host,
      port: service.port,
      path: path,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'X-Org-Id': CONFIG.orgId,
        ...headers
      }
    }, (res) => {
      let responseBody = '';
      res.on('data', (chunk) => responseBody += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try { resolve(JSON.parse(responseBody)); } catch (e) { resolve(responseBody); }
        } else {
          console.error(`❌ ${serviceName} error: ${res.statusCode} for ${path}`);
          resolve({ error: true, status: res.statusCode, data: responseBody });
        }
      });
    });
    req.on('error', (e) => {
       console.error(`❌ ${serviceName} network error: ${e.message}`);
       resolve({ error: true, message: e.message });
    });
    if (body) req.write(body);
    req.end();
  });
}

async function run() {
  console.log('🚀 Starting Industrial CRM Seeding...');

  const owner = CONFIG.users[0];
  const staff = CONFIG.users[1];

  // 1. ORGANIZATION
  console.log('\n🏢 Seeding Organization Memberships...');
  for (const user of CONFIG.users) {
    console.log(`   - Adding ${user.username} to Org...`);
    await request('organization', 'POST', '/v1/memberships', {
      userId: user.id,
      role: user.role,
      metadata: { username: user.username }
    }, { 'X-User-Id': 'system' });
  }

  // 2. ODOO CONTACTS
  console.log('\n👥 Seeding Odoo Contacts...');
  for (const contact of DUMMY_DATA.contacts) {
    console.log(`   - Creating contact: ${contact.name}...`);
    await request('odoo', 'POST', '/v1/odoo/contacts', contact, { 'X-User-Id': owner.id });
  }

  // 3. ODOO CRM LEADS
  console.log('\n💼 Seeding Odoo CRM Leads...');
  for (const lead of DUMMY_DATA.leads) {
    console.log(`   - Creating lead: ${lead.name}...`);
    await request('odoo', 'POST', '/v1/odoo/crm', lead, { 'X-User-Id': staff.id });
  }

  console.log('\n✅ Industrial CRM Seeding Completed!');
}

run().catch(console.error);
