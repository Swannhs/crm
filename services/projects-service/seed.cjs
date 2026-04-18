const http = require('http');

const CONFIG = {
  port: process.env.SERVICE_PORT || 8040,
  host: 'localhost',
  orgId: 'org_dev_123',
  userId: 'user_dev_123'
};

const DUMMY_PROJECTS = [
  { title: 'Project Alpha', description: 'Internal modernization.' },
  { title: 'Project Beta', description: 'Customer portal development.' }
];

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
          reject(new Error(`Failed ${path}: ${res.statusCode} - ${responseBody}`));
        }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

async function run() {
  console.log(`🚀 Seeding Projects Service on port ${CONFIG.port}...`);
  for (const p of DUMMY_PROJECTS) {
    const project = await post('/v1/projects', p);
    console.log(`✅ Created Project: ${project.title} (${project.id || project._id})`);
  }
}

run().catch(err => {
  console.error('❌ Seeding failed:', err.message);
  process.exit(1);
});
