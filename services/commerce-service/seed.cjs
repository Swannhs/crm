const http = require('http');

const CONFIG = {
  port: process.env.SERVICE_PORT || 7060,
  host: 'localhost',
  orgId: 'org_dev_123',
  userId: 'user_dev_123'
};

const DUMMY_DATA = [{
  "name": "Pro Subscription",
  "price": 99
}];

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
  console.log(`🚀 Seeding Service on port ${CONFIG.port}...`);
  for (const item of DUMMY_DATA) {
    const res = await post('${path}', item);
    console.log(`✅ Seeded item successfully:`, res.id || res._id || 'OK');
  }
}

run().catch(err => {
  console.error('❌ Seeding failed:', err.message);
  process.exit(1);
});
