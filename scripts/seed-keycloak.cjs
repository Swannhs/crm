const http = require('http');

const CONFIG = {
  keycloak: {
    url: process.env.KEYCLOAK_URL || 'http://localhost:8080',
    adminUser: process.env.KEYCLOAK_ADMIN || 'admin',
    adminPass: process.env.KEYCLOAK_PASS || 'admin',
    realm: 'mymanager'
  },
  users: [
    {
      id: 'owner-id-001',
      username: 'org-owner',
      password: 'password123',
      email: 'owner@example.com',
      firstName: 'Org',
      lastName: 'Owner'
    },
    {
      id: 'admin-id-002',
      username: 'org-admin',
      password: 'password123',
      email: 'admin@example.com',
      firstName: 'Org',
      lastName: 'Admin'
    },
    {
      id: 'staff-id-003',
      username: 'org-staff',
      password: 'password123',
      email: 'staff@example.com',
      firstName: 'Org',
      lastName: 'Staff'
    },
    {
      id: 'viewer-id-004',
      username: 'org-viewer',
      password: 'password123',
      email: 'viewer@example.com',
      firstName: 'Org',
      lastName: 'Viewer'
    }
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
    req.write(data);
    req.end();
  });
}

async function createKeycloakUser(token, user) {
  const userData = JSON.stringify({
    id: user.id,
    username: user.username,
    enabled: true,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    credentials: [{
      type: 'password',
      value: user.password,
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
        console.log(res.statusCode === 409 ? `ℹ️ User ${user.username} already exists` : `✅ User ${user.username} created`);
        resolve();
      } else {
        reject(new Error(`User Creation Failed for ${user.username}: ${res.statusCode}`));
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
    
    for (const user of CONFIG.users) {
      console.log(`👤 Creating user: ${user.username}...`);
      await createKeycloakUser(token, user);
    }
    
    console.log('🎉 Keycloak users seeding complete.');
  } catch (err) {
    console.error(`❌ Keycloak: ${err.message}`);
  }
}

run().then(() => process.exit(0)).catch((err) => {
  console.error(err);
  process.exit(1);
});
