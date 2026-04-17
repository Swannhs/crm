#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

function parseArgs(argv) {
  const args = {
    modules: [],
    krakend: path.resolve("gateway/krakend/krakend.json"),
    monolithRoot: process.env.MONOLITH_ROOT
      ? path.resolve(process.env.MONOLITH_ROOT)
      : path.resolve("..", "server")
  };
  for (let i = 2; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--modules") args.modules = String(argv[i + 1] || "").split(",").map((s) => s.trim()).filter(Boolean);
    if (a === "--krakend") args.krakend = path.resolve(argv[i + 1]);
    if (a === "--monolith-root") args.monolithRoot = path.resolve(argv[i + 1]);
  }
  return args;
}

function extractRoutesFromSource(source) {
  const routes = [];
  const re = /\brouter\.(get|post|put|patch|delete)\s*\(\s*([`'"])([^`'"]+)\2\s*,/g;
  let m;
  while ((m = re.exec(source))) {
    routes.push({ method: m[1].toUpperCase(), path: m[3] });
  }
  return routes;
}

function toKrakendEndpointPath(basePath, routePath) {
  // basePath like /api/contact
  // routePath like /getById/:id
  const p = `${basePath}${routePath.startsWith("/") ? "" : "/"}${routePath}`;
  // Convert Express params ":id" into KrakenD "{id}".
  // We also normalize param names to lowercase because KrakenD's template output
  // variables don't reliably support camelCase (e.g. ":contactId").
  return p.replace(/:([A-Za-z0-9_]+)/g, (_m, name) => `{${String(name).toLowerCase()}}`);
}

function authValidatorConfig() {
  return {
    "auth/validator": {
      alg: "RS256",
      jwk_url: "http://keycloak:8080/realms/mymanager/protocol/openid-connect/certs",
      disable_jwk_security: true,
      cache: true,
      propagate_claims: [
        ["sub", "X-User-Id"],
        ["org_id", "X-Org-Id"]
      ]
    }
  };
}

function main() {
  const args = parseArgs(process.argv);
  if (!args.modules.length) {
    console.error("Usage: node tools/krakend-add-api-compat.mjs --modules contact,invoice,booking");
    process.exit(1);
  }

  const routesDir = path.join(args.monolithRoot, "routes");
  if (!fs.existsSync(routesDir)) {
    console.error(`Monolith routes not found at ${routesDir}. Set MONOLITH_ROOT or pass --monolith-root.`);
    process.exit(1);
  }

  const krakend = JSON.parse(fs.readFileSync(args.krakend, "utf8"));
  krakend.endpoints = krakend.endpoints || [];

  const existingKey = new Set(
    krakend.endpoints.map((e) => `${String(e.method || "ANY").toUpperCase()} ${e.endpoint}`)
  );

  const added = [];

  for (const mod of args.modules) {
    const file = path.join(routesDir, `${mod}.js`);
    if (!fs.existsSync(file)) {
      console.warn(`Skipping ${mod}: ${file} not found`);
      continue;
    }
    const source = fs.readFileSync(file, "utf8");
    const routes = extractRoutesFromSource(source);
    const basePath = `/api/${mod}`;

    for (const r of routes) {
      const endpoint = toKrakendEndpointPath(basePath, r.path);
      const method = r.method;
      const key = `${method} ${endpoint}`;
      if (existingKey.has(key)) continue;

      const entry = {
        endpoint,
        method,
        input_headers: ["Authorization", "Content-Type", "X-User-Id", "X-Org-Id"],
        // Act as a reverse-proxy for these transitional endpoints.
        output_encoding: "no-op",
        extra_config: authValidatorConfig(),
        backend: [
          {
            host: ["http://api-router-service:7001"],
            // KrakenD supports path-param substitution using `{param}` on url_pattern.
            // Using template vars like `{{.Contact}}` fails for some param names.
            encoding: "no-op",
            url_pattern: endpoint,
            extra_config: {
              "auth/validator": {}
            }
          }
        ]
      };

      krakend.endpoints.push(entry);
      existingKey.add(key);
      added.push(key);
    }
  }

  fs.writeFileSync(args.krakend, JSON.stringify(krakend, null, 2) + "\n");
  console.log(`Added ${added.length} api-compat endpoints to ${args.krakend}`);
}

main();
