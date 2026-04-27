const http = require('http');

const CONFIG = {
  services: {
    organization: { host: process.env.SEED_ORG_HOST || 'localhost', port: 7010 },
    projects: { host: process.env.SEED_PROJECTS_HOST || 'localhost', port: 8040 },
    deal: { host: process.env.SEED_DEAL_HOST || 'localhost', port: 7150 },
    emailSync: { host: process.env.SEED_EMAIL_SYNC_HOST || 'localhost', port: 7160 },
    calendar: { host: process.env.SEED_CALENDAR_HOST || 'localhost', port: 8050 },
    documents: { host: process.env.SEED_DOCUMENTS_HOST || 'localhost', port: 7080 },
    employees: { host: process.env.SEED_EMPLOYEES_HOST || 'localhost', port: 7070 },
    pos: { host: process.env.SEED_POS_HOST || 'localhost', port: 7100 },
    notification: { host: process.env.SEED_NOTIFICATION_HOST || 'localhost', port: 8000 },
    scoring: { host: process.env.SEED_SCORING_HOST || 'localhost', port: 7180 }
  },
  keycloak: {
    url: process.env.KEYCLOAK_URL || 'http://keycloak:8080',
    adminUser: process.env.KEYCLOAK_ADMIN || 'admin',
    adminPass: process.env.KEYCLOAK_PASS || 'admin',
    realm: 'mymanager'
  },
  orgId: 'd6b9ea2a-7e1e-4b9a-9e1e-5a0a38d7b384',
  users: [
    { username: 'org-owner', role: 'org_owner', email: 'owner@example.com' },
    { username: 'org-admin', role: 'org_admin', email: 'admin@example.com' },
    { username: 'org-staff', role: 'org_staff', email: 'staff@example.com' },
    { username: 'org-viewer', role: 'org_viewer', email: 'viewer@example.com' }
  ]
};

const DUMMY_DATA = {
  projects: [
    { name: 'Enterprise Resource Planning', description: 'Internal ERP modernization.' },
    { name: 'Customer Portal 2.0', description: 'New React-based customer facing portal.' }
  ],
  columns: ['To Do', 'Doing', 'Done'],
  deals: [
    { name: 'Cloud Migration Contract', amount: 85000, stage: 'proposal' },
    { name: 'Security Audit Service', amount: 12000, stage: 'qualification' }
  ],
  events: [
    { title: 'Weekly Sync', description: 'Team update meeting', startTime: new Date().toISOString(), duration: 60 },
    { title: 'Project Kickoff', description: 'New project start', startTime: new Date(Date.now() + 86400000).toISOString(), duration: 90 }
  ],
  employees: [
    { firstName: 'Sarah', lastName: 'Connor', email: 'sarah@mymanager.com', position: 'Developer', department: 'Engineering' },
    { firstName: 'Kyle', lastName: 'Reese', email: 'kyle@mymanager.com', position: 'Manager', department: 'Sales' }
  ],
  documents: [
    { name: 'Company Handbook.pdf', type: 'policy', size: 1024567 },
    { name: 'Q1 Financial Report.xlsx', type: 'report', size: 450000 }
  ]
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
  console.log('🚀 Starting Comprehensive Multi-Service Seeding...');
  
  console.log('🔑 Authenticating with Keycloak for ID resolution...');
  const token = await getAdminToken();
  
  for (const user of CONFIG.users) {
    user.id = await getUserIdByEmail(token, user.email);
    console.log(`🆔 Resolved ${user.username} to ${user.id}`);
  }

  // 1. ORGANIZATION
  console.log('\n--- Organization ---');
  for (const user of CONFIG.users) {
    if (user.id) {
       await request('organization', 'POST', '/v1/memberships', { userId: user.id, role: user.role, metadata: { username: user.username } }, { 'X-User-Id': 'system' });
    }
  }

  const owner = CONFIG.users[0];
  const staff = CONFIG.users[2];

  // 2. PROJECTS
  console.log('--- Projects ---');
  for (const proj of DUMMY_DATA.projects) {
    const res = await request('projects', 'POST', '/v1/projects', proj, { 'X-User-Id': owner.id });
    const projectId = res.data?.id || res.id;
    if (projectId) {
      const boardRes = await request('projects', 'POST', `/v1/projects/${projectId}/boards`, { name: 'Main' }, { 'X-User-Id': owner.id });
      const boardId = boardRes.data?.id || boardRes.id;
      for (const col of DUMMY_DATA.columns) await request('projects', 'POST', `/v1/boards/${boardId}/columns`, { name: col }, { 'X-User-Id': owner.id });
    }
  }

  // 3. Deals
  console.log('--- Deals ---');
  for (const d of DUMMY_DATA.deals) await request('deal', 'POST', '/api/v1/deals', d, { 'X-User-Id': staff.id });

  // 4. CALENDAR
  console.log('--- Calendar ---');
  for (const e of DUMMY_DATA.events) await request('calendar', 'POST', '/v1/events', e, { 'X-User-Id': staff.id });

  // 5. EMPLOYEES
  console.log('--- Employees ---');
  for (const emp of DUMMY_DATA.employees) await request('employees', 'POST', '/v1/employees', emp, { 'X-User-Id': owner.id });

  // 6. DOCUMENTS
  console.log('--- Documents ---');
  for (const doc of DUMMY_DATA.documents) await request('documents', 'POST', '/v1/documents', doc, { 'X-User-Id': staff.id });

  // 7. POS
  console.log('--- POS ---');
  await request('pos', 'POST', '/v1/transactions', { amount: 150.50, items: [{ name: 'License', price: 150.50 }] }, { 'X-User-Id': staff.id });

  console.log('\n✅ Comprehensive Seeding Completed!');
}

seed().then(() => process.exit(0)).catch((err) => {
  console.error(err);
  process.exit(1);
});
