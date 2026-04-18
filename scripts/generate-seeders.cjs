const fs = require('fs');
const path = require('path');

const services = [
  { name: 'organization-service', port: 7010, path: '/v1/organizations', data: { name: 'Dev Corp', plan: 'pro' } },
  { name: 'billing-service', port: 7020, path: '/v1/invoices', data: { amount: 1200, status: 'paid' } },
  { name: 'booking-service', port: 7040, path: '/v1/booking-types', data: { name: 'Consultation', duration: 60 } },
  { name: 'community-service', port: 7050, path: '/v1/posts', data: { title: 'Hello World', content: 'First post!' } },
  { name: 'commerce-service', port: 7060, path: '/v1/products', data: { name: 'Pro Subscription', price: 99 } },
  { name: 'employees-service', port: 7070, path: '/v1/employees', data: { firstName: 'John', lastName: 'Doe', email: 'john@dev.com' } },
  { name: 'documents-service', port: 7080, path: '/v1/documents', data: { title: 'Contract.pdf', type: 'pdf' } },
  { name: 'crm-service', port: 8010, path: '/v1/contacts', data: { fullName: 'Jane Smith', email: 'jane@smith.com' } },
  { name: 'marketing-service', port: 8030, path: '/v1/campaigns', data: { title: 'Spring Sale', status: 'active' } },
  { name: 'calendar-service', port: 8050, path: '/v1/events', data: { title: 'Standup', start: new Date().toISOString() } }
];

const template = (port, path, data) => `const http = require('http');

const CONFIG = {
  port: process.env.SERVICE_PORT || ${port},
  host: 'localhost',
  orgId: 'org_dev_123',
  userId: 'user_dev_123'
};

const DUMMY_DATA = [${JSON.stringify(data, null, 2)}];

async function post(path, data) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(data);
    const req = http.request({
      hostname: CONFIG.host,
      port: CONFIG.port,
      path: path,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': body.length,
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
          reject(new Error(\`Failed \${path}: \${res.statusCode} - \${responseBody}\`));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function run() {
  console.log(\`🚀 Seeding Service on port \${CONFIG.port}...\`);
  for (const item of DUMMY_DATA) {
    const res = await post('\${path}', item);
    console.log(\`✅ Seeded item successfully:\`, res.id || res._id || 'OK');
  }
}

run().catch(err => {
  console.error('❌ Seeding failed:', err.message);
  process.exit(1);
});
`;

services.forEach(s => {
  const filePath = path.join(__dirname, '..', 'services', s.name, 'seed.js');
  fs.writeFileSync(filePath, template(s.port, s.path, s.data));
  console.log(`Created seeder for ${s.name} at ${filePath}`);
});
