const http = require('http');

const CONFIG = {
  keycloakUrl: 'http://localhost:8080',
  gatewayUrl: 'http://localhost:8081',
  realm: 'mymanager',
  adminUser: 'admin',
  adminPass: 'admin'
};

// This helper performs a POST request using native http
async function request(url, method, headers, data) {
  return new Promise((resolve, reject) => {
    const urlObj = new URL(url);
    const body = data ? JSON.stringify(data) : '';
    const options = {
      hostname: urlObj.hostname,
      port: urlObj.port,
      path: urlObj.pathname + urlObj.search,
      method: method,
      headers: {
        'Content-Type': 'application/json',
        ...headers
      }
    };
    if (body) options.headers['Content-Length'] = Buffer.byteLength(body);

    const req = http.request(options, (res) => {
      let responseBody = '';
      res.on('data', (chunk) => responseBody += chunk);
      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          try { resolve(JSON.parse(responseBody)); } catch (e) { resolve(responseBody); }
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${responseBody}`));
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(body);
    req.end();
  });
}

// Special function to get Keycloak Admin Token (requires x-www-form-urlencoded)
async function getAdminToken() {
    // For simplicity in a zero-dep script, we use a slightly manual POST for form data
    return new Promise((resolve, reject) => {
        const body = `client_id=admin-cli&username=${CONFIG.adminUser}&password=${CONFIG.adminPass}&grant_type=password`;
        const req = http.request(`${CONFIG.keycloakUrl}/realms/master/protocol/openid-connect/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': body.length
            }
        }, (res) => {
            let data = '';
            res.on('data', d => data += d);
            res.on('end', () => resolve(JSON.parse(data).access_token));
        });
        req.on('error', reject);
        req.write(body);
        req.end();
    });
}

async function run() {
  try {
    console.log('🔑 Obtaining Keycloak Admin Token...');
    const token = await getAdminToken();
    
    const devUser = {
        username: 'devuser',
        email: 'dev@mymanager.com',
        enabled: true,
        firstName: 'Development',
        lastName: 'User',
        credentials: [{ type: 'password', value: 'password123', temporary: false }]
    };

    console.log('👤 Creating Dev User in Keycloak...');
    await request(
        `${CONFIG.keycloakUrl}/admin/realms/${CONFIG.realm}/users`,
        'POST',
        { 'Authorization': `Bearer ${token}` },
        devUser
    );

    console.log('✅ User "devuser" created successfully in Keycloak.');
    console.log('👉 Password: password123');
    console.log('\n⚠️ Note: To sync with the Monolith DB, please log in once through the frontend.');
    
  } catch (err) {
    if (err.message.includes('409')) {
        console.log('ℹ️ User already exists in Keycloak. Skipping creation.');
    } else {
        console.error('❌ User generation failed:', err.message);
    }
  }
}

run();
