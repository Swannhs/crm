const http = require('http');

const CONFIG = {
  services: {
    projects: {
      host: process.env.SEED_PROJECTS_HOST || process.env.SEED_HOST || 'localhost',
      port: Number(process.env.SEED_PROJECTS_PORT || 8040),
    },
    crm: {
      host: process.env.SEED_CRM_HOST || process.env.SEED_HOST || 'localhost',
      port: Number(process.env.SEED_CRM_PORT || 8010),
    },
    billing: {
      host: process.env.SEED_BILLING_HOST || process.env.SEED_HOST || 'localhost',
      port: Number(process.env.SEED_BILLING_PORT || 7020),
    },
    deal: {
      host: process.env.SEED_DEAL_HOST || process.env.SEED_HOST || 'localhost',
      port: Number(process.env.SEED_DEAL_PORT || 7150),
    },
    emailSync: {
      host: process.env.SEED_EMAIL_SYNC_HOST || process.env.SEED_HOST || 'localhost',
      port: Number(process.env.SEED_EMAIL_SYNC_PORT || 7160),
    },
  },
  userId: process.env.SEED_USER_ID || 'user-dev-123',
  orgId: process.env.SEED_ORG_ID || 'd6b9ea2a-7e1e-4b9a-9e1e-5a0a38d7b384',
};

const DUMMY_DATA = {
  projects: [
    { name: 'Modernizing MyManager', description: 'Migration from legacy CRA to Next.js 14 Dashboard.' },
    { name: 'BMEB Portal Refinement', description: 'Pixel-perfect CSS overhaul for government portal.' },
    { name: 'Campus Social App', description: 'Cross-platform mobile app for academic networking.' },
    { name: 'Fintech Dashboard', description: 'Real-time financial analytics and reporting.' },
    { name: 'Microservices Gateway', description: 'Engineering a high-performance Krakend router.' }
  ],
  columns: ['Backlog', 'In Progress', 'In Review', 'Done', 'Blocked'],
  tasks: [
    'Implement Auth Guards', 'Fix Prisma Validation', 'Add AI Chat Widget',
    'Integrate ApexCharts', 'Complete CRM Migration', 'Refactor Layout Tree',
    'Sync Docker Compose', 'Update Env Variables', 'Audit API Gateway',
    'Finalize Invoices UI'
  ],
  deals: [
    { name: 'Enterprise License - Google', amount: 50000, stage: 'negotiation' },
    { name: 'SME Package - Local Startup', amount: 5000, stage: 'prospecting' },
    { name: 'Government Contract - BMEB', amount: 120000, stage: 'proposal' },
    { name: 'Consulting Retainer', amount: 15000, stage: 'closed-won' }
  ]
};

async function post(serviceName, path, data) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(data);
    const service = CONFIG.services[serviceName];

    if (!service) {
      reject(new Error(`Unknown service target: ${serviceName}`));
      return;
    }

    const req = http.request({
      hostname: service.host,
      port: service.port,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Content-Length': Buffer.byteLength(body),
        'X-User-Id': CONFIG.userId,
        'X-Org-Id': CONFIG.orgId
      }
    }, (res) => {
      let responseBody = '';
      res.on('data', (chunk) => responseBody += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try { resolve(JSON.parse(responseBody)); } catch (e) { resolve(responseBody); }
        } else {
          reject(new Error(`Failed [${serviceName} ${service.host}:${service.port}] ${path}: ${res.statusCode} - ${responseBody}`));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function seed() {
  console.log('🚀 Starting Corrected Direct Service Seeding...');
  
  // 1. SEED PROJECTS & KANBAN
  console.log('\n--- Seeding Projects Service (8040) ---');
  for (const proj of DUMMY_DATA.projects) {
    try {
      console.log(`📂 Creating Project: ${proj.name}`);
      const res = await post('projects', '/v1/projects', proj);
      const project = res.data || res;
      const projectId = project.id || project._id;
      
      console.log(`📋 Creating Board for Project: ${projectId}`);
      const boardRes = await post('projects', `/v1/projects/${projectId}/boards`, { name: 'Master Board' });
      const board = boardRes.data || boardRes;
      const boardId = board.id || board._id;

      for (const colTitle of DUMMY_DATA.columns) {
        const colRes = await post('projects', `/v1/boards/${boardId}/columns`, { name: colTitle });
        const col = colRes.data || colRes;
        const columnId = col.id || col._id;
        for (let i = 0; i < 2; i++) {
           const taskTitle = DUMMY_DATA.tasks[Math.floor(Math.random() * DUMMY_DATA.tasks.length)];
           await post('projects', `/v1/boards/${boardId}/cards`, {
             title: taskTitle, columnId: columnId, description: 'Auto-seeded task.'
           });
        }
      }
    } catch (err) { console.error(`❌ Projects: ${err.message}`); }
  }

  // 2. SEED CRM (CONTACTS)
  console.log('\n--- Seeding CRM Service (8010) ---');
  const contacts = [
    { name: 'Alice Henderson', email: 'alice@enterprise.com', phone: '555-0192' },
    { name: 'Bob Richards', email: 'bob@startup.io', phone: '555-0123' },
    { name: 'Charlie Dixon', email: 'charlie@global.net', phone: '555-0456' }
  ];

  const createdContacts = [];
  for (const c of contacts) {
    try {
      console.log(`👤 Creating Contact: ${c.name}`);
      const res = await post('crm', '/api/v1/contacts', c);
      createdContacts.push(res.data || res);
    } catch (err) { console.error(`❌ CRM: ${err.message}`); }
  }

  // 3. SEED BILLING (INVOICES)
  console.log('\n--- Seeding Billing Service (7020) ---');
  for (const contact of createdContacts) {
    try {
      const contactId = contact.id || contact._id;
      const contactName = contact.name || contact.fullName;
      console.log(`🧾 Creating Invoice for: ${contactName}`);
      await post('billing', '/v1/invoices', {
        contactId,
        amount_cents: (Math.floor(Math.random() * 5000) + 500) * 100,
        status: 'pending',
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
      });
    } catch (err) { console.error(`❌ Billing: ${err.message}`); }
  }

  // 4. SEED DEALS
  console.log('\n--- Seeding Deal Service (7150) ---');
  for (const deal of DUMMY_DATA.deals) {
    try {
      console.log(`🤝 Creating Deal: ${deal.name}`);
      await post('deal', '/api/v1/deals', deal);
    } catch (err) { console.error(`❌ Deal: ${err.message}`); }
  }

  // 5. SEED EMAIL SYNC
  console.log('\n--- Seeding Email Sync Service (7160) ---');
  try {
    console.log(`📧 Creating Test Email Account`);
    await post('emailSync', '/api/v1/accounts', {
      email: 'test@mymanager.com',
      provider: 'gmail',
      syncEnabled: true
    });
  } catch (err) { console.error(`❌ EmailSync: ${err.message}`); }

  console.log('\n✅ Seeding Successfully Completed.');
}

seed().catch(console.error);
