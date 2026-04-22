const http = require('http');

const CONFIG = {
  keycloak: {
    url: process.env.KEYCLOAK_URL || 'http://localhost:8080',
    adminUser: process.env.KEYCLOAK_ADMIN || 'admin',
    adminPass: process.env.KEYCLOAK_PASS || 'admin',
    realm: 'mymanager'
  },
  testUser: {
    username: 'testuser',
    password: 'password123',
    email: 'test@example.com',
    firstName: 'Test',
    lastName: 'User'
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
    req.write(data);
    req.end();
  });
}

async function createTestUser(token) {
  const userData = JSON.stringify({
    username: CONFIG.testUser.username,
    enabled: true,
    email: CONFIG.testUser.email,
    firstName: CONFIG.testUser.firstName,
    lastName: CONFIG.testUser.lastName,
    credentials: [{
      type: 'password',
      value: CONFIG.testUser.password,
      temporary: false
    }]
  });

  return new Promise((resolve, reject) => {
    const url = new URL(`${CONFIG.keycloak.url}/admin/realms/${CONFIG.keycloak.realm}/users`);
    const req = http.request({
      hostname: url.hostname,
      port: url.port,
      path: url.pathname,
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(userData)
      }
    }, (res) => {
      if (res.statusCode === 201 || res.statusCode === 409) {
        console.log(res.statusCode === 409 ? 'ℹ️ User already exists' : '✅ User created');
        resolve();
      } else {
        reject(new Error(`User Creation Failed: ${res.statusCode}`));
      }
    });
    req.write(userData);
    req.end();
  });
}

async function run() {
  try {
    console.log('🔑 Authenticating with Keycloak...');
    const token = await getAdminToken();
    console.log('👤 Creating test user...');
    await createTestUser(token);
    console.log('🎉 Keycloak seeding complete.');
  } catch (err) {
    console.error(`❌ Keycloak: ${err.message}`);
  }
}

run().catch(console.error);
