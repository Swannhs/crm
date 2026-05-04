const http = require('http');

const CONFIG = {
  orgId: 'd6b9ea2a-7e1e-4b9a-9e1e-5a0a38d7b384',
  services: {
    organization: { host: process.env.SEED_ORG_HOST || 'localhost', port: 7010 },
    emailSync: { host: process.env.SEED_EMAIL_SYNC_HOST || 'localhost', port: 7160 },
    odoo: { host: process.env.SEED_ODOO_HOST || 'localhost', port: 7200 },
    booking: { host: process.env.SEED_BOOKING_HOST || 'localhost', port: 7040 },
    integrations: { host: process.env.SEED_INTEGRATIONS_HOST || 'localhost', port: 7140 }
  },
  keycloak: {
    url: process.env.KEYCLOAK_URL || 'http://keycloak:8080',
    adminUser: process.env.KEYCLOAK_ADMIN || 'admin',
    adminPass: process.env.KEYCLOAK_PASS || 'admin',
    realm: 'mymanager'
  },
  users: [
    { username: 'org-owner', role: 'org_owner', email: 'owner@example.com' },
    { username: 'org-admin', role: 'org_admin', email: 'admin@example.com' },
    { username: 'org-staff', role: 'org_staff', email: 'staff@example.com' },
    { username: 'org-viewer', role: 'org_viewer', email: 'viewer@example.com' }
  ]
};

const DUMMY_DATA = {
  odoo: {
    projects: [
      { name: 'Enterprise Resource Planning', description: 'Internal ERP modernization.' },
      { name: 'Customer Portal 2.0', description: 'New React-based customer facing portal.' }
    ],
    columns: ['To Do', 'Doing', 'Done'],
    crm: [
      { name: 'Cloud Migration Contract', planned_revenue: 85000, probability: 30 },
      { name: 'Security Audit Service', planned_revenue: 12000, probability: 70 }
    ],
    employees: [
      { name: 'Sarah Connor', work_email: 'sarah@mymanager.com', job_title: 'Developer', department_id: false },
      { name: 'Kyle Reese', work_email: 'kyle@mymanager.com', job_title: 'Manager', department_id: false }
    ],
    contacts: [
      { name: 'John Doe', email: 'john@acme.com', phone: '+123456789', is_company: false },
      { name: 'Acme Corp', email: 'contact@acme.com', is_company: true, street: '123 Business Ave', city: 'Tech City' }
    ],
    products: [
      { name: 'Industrial Sensor X1', list_price: 299.99, standard_price: 150.00, default_code: 'SNSR-X1' },
      { name: 'Control Unit v4', list_price: 1200.00, standard_price: 600.00, default_code: 'CTRL-V4' }
    ],
    categories: [
      { name: 'Hardware' },
      { name: 'Software' }
    ]
  },
  booking: {
    types: [
      { name: 'Technical Consultation', duration: 60, price: 150 },
      { name: 'Product Demo', duration: 30, price: 0 }
    ],
    appointments: [
      { customerName: 'Alice Smith', customerEmail: 'alice@example.com', startTime: new Date(Date.now() + 172800000).toISOString() }
    ]
  },
  emailSync: {
    sequences: [
      { name: 'Onboarding Sequence', steps: [{ subject: 'Welcome!', body: 'Glad to have you.', delayDays: 0 }] }
    ]
  }
};

async function getAdminToken() {
  const data = new URLSearchParams({
    client_id: 'admin-cli',
    username: CONFIG.keycloak.adminUser,
    password: CONFIG.keycloak.adminPass,
    grant_type: 'password'
  }).toString();

  return new Promise((resolve, reject) => {
    const url = new URL(`${CONFIG.keycloak.url}/realms/master/protocol/openid-connect/token`);
    const req = http.request({
      hostname: url.hostname,
      port: url.port,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(data)
      }
    }, (res) => {
      let body = '';
      res.on('data', (d) => body += d);
      res.on('end', () => {
        if (res.statusCode === 200) resolve(JSON.parse(body).access_token);
        else reject(new Error(`Token Failed: ${res.statusCode} ${body}`));
      });
    });
    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function getUserIdByEmail(token, email) {
  return new Promise((resolve, reject) => {
    const url = new URL(`${CONFIG.keycloak.url}/admin/realms/${CONFIG.keycloak.realm}/users?email=${email}`);
    const req = http.request({
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    }, (res) => {
      let body = '';
      res.on('data', (d) => body += d);
      res.on('end', () => {
        if (res.statusCode === 200) {
          const users = JSON.parse(body);
          resolve(users[0]?.id || null);
        } else reject(new Error(`Fetch Failed: ${res.statusCode}`));
      });
    });
    req.on('error', reject);
    req.end();
  });
}

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
        'Accept': 'application/json',
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
          resolve({ error: true, status: res.statusCode, data: responseBody });
        }
      });
    });
    req.on('error', (e) => resolve({ error: true, message: e.message }));
    if (body) req.write(body);
    req.end();
  });
}

async function seed() {
  console.log('🚀 Starting Unified Full-Stack Seeding...');
  
  const token = await getAdminToken();
  for (const user of CONFIG.users) {
    user.id = await getUserIdByEmail(token, user.email);
    console.log(`🆔 Resolved ${user.username} to ${user.id}`);
  }

  const owner = CONFIG.users[0];
  const staff = CONFIG.users[2];

  // 1. ORGANIZATION
  console.log('\n--- Organization Memberships ---');
  for (const user of CONFIG.users) {
    if (user.id) {
       await request('organization', 'POST', '/v1/memberships', { userId: user.id, role: user.role, metadata: { username: user.username } }, { 'X-User-Id': 'system' });
    }
  }

  // 2. ODOO INTEGRATION (Unified Odoo Adapter)
  console.log('\n--- Odoo Integration Entities ---');
  for (const cat of DUMMY_DATA.odoo.categories) await request('odoo', 'POST', '/v1/odoo/categories', cat, { 'X-User-Id': owner.id });
  for (const prod of DUMMY_DATA.odoo.products) await request('odoo', 'POST', '/v1/odoo/products', prod, { 'X-User-Id': owner.id });
  for (const contact of DUMMY_DATA.odoo.contacts) await request('odoo', 'POST', '/v1/odoo/contacts', contact, { 'X-User-Id': owner.id });
  for (const lead of DUMMY_DATA.odoo.crm) await request('odoo', 'POST', '/v1/odoo/crm', lead, { 'X-User-Id': staff.id });
  for (const emp of DUMMY_DATA.odoo.employees) await request('odoo', 'POST', '/v1/odoo/employees', emp, { 'X-User-Id': owner.id });
  
  for (const proj of DUMMY_DATA.odoo.projects) {
    const res = await request('odoo', 'POST', '/v1/odoo/projects', proj, { 'X-User-Id': owner.id });
    const projectId = res.id;
    if (projectId) {
       // Odoo uses a slightly different structure for stages/columns
       await request('odoo', 'POST', '/v1/odoo/projects/stages', { name: 'To Do', project_ids: [projectId] }, { 'X-User-Id': owner.id });
    }
  }

  // 3. BOOKING SERVICE
  console.log('\n--- Booking Service ---');
  for (const bt of DUMMY_DATA.booking.types) {
    const res = await request('booking', 'POST', '/v1/booking-types', bt, { 'X-User-Id': owner.id });
    const btId = res.id;
    if (btId) {
       await request('booking', 'POST', '/v1/availability', { bookingTypeId: btId, dayOfWeek: 1, startTime: '09:00', endTime: '17:00' }, { 'X-User-Id': owner.id });
       await request('booking', 'POST', '/v1/appointments', { ...DUMMY_DATA.booking.appointments[0], bookingTypeId: btId }, { 'X-User-Id': owner.id });
    }
  }

  // 4. EMAIL SYNC SERVICE
  console.log('\n--- Email Sync Service ---');
  for (const seq of DUMMY_DATA.emailSync.sequences) {
    const res = await request('emailSync', 'POST', '/api/v1/email/sequences', seq, { 'X-User-Id': owner.id });
    const seqId = res.id;
    if (seqId) {
      await request('emailSync', 'POST', '/api/v1/email/sequences/enroll', { 
        sequenceId: seqId, 
        contactEmail: DUMMY_DATA.odoo.contacts[0].email,
        firstName: DUMMY_DATA.odoo.contacts[0].name.split(' ')[0]
      }, { 'X-User-Id': owner.id });
    }
  }

  // 5. INTEGRATIONS SERVICE
  console.log('\n--- Integrations Service ---');
  await request('integrations', 'POST', '/v1/integrations/connect', { 
    provider: 'odoo', 
    credentials: { url: 'http://odoo:8069', db: 'odoo', username: 'admin', password: 'password' } 
  }, { 'X-User-Id': owner.id });

  console.log('\n✅ Unified Seeding Completed Successfully!');
}

seed().then(() => process.exit(0)).catch((err) => {
  console.error('❌ Seeding failed:', err);
  process.exit(1);
});
