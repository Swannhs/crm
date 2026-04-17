#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

function parseArgs(argv) {
  const args = { out: null, appname: "api" };
  for (let i = 2; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === "--out") args.out = argv[i + 1];
    if (a === "--appname") args.appname = argv[i + 1];
  }
  return args;
}

function extractRoutesFromSource(source) {
  // Heuristic parser: catches most common patterns like:
  // router.get("/path", ...)
  // router.post('/path', ...)
  // router.delete(`/${id}`, ...)
  // It is intentionally conservative (we prefer missing a route over inventing one).
  const routes = [];
  const re = /\brouter\.(get|post|put|patch|delete)\s*\(\s*([`'"])([^`'"]+)\2\s*,/g;
  let m;
  while ((m = re.exec(source))) {
    routes.push({ method: m[1].toUpperCase(), path: m[3] });
  }
  return routes;
}

function main() {
  const args = parseArgs(process.argv);

  const monolithRoot = process.env.MONOLITH_ROOT
    ? path.resolve(process.env.MONOLITH_ROOT)
    : path.resolve("..", "server");
  const routesDir = path.join(monolithRoot, "routes");

  if (!fs.existsSync(routesDir)) {
    console.error(
      `Could not find monolith routes directory at: ${routesDir}\n` +
        `Set MONOLITH_ROOT to your monolith folder (the one containing routes/).\n` +
        `Example: MONOLITH_ROOT=../server node tools/route-inventory.mjs --out migration/route-inventory.json`
    );
    process.exit(1);
  }

  const files = fs
    .readdirSync(routesDir)
    .filter((f) => f.endsWith(".js"))
    .sort();

  const inventory = [];
  for (const file of files) {
    if (file === "socket.js") continue;
    const moduleName = path.basename(file, ".js");
    const fullPath = path.join(routesDir, file);
    const source = fs.readFileSync(fullPath, "utf8");
    const routes = extractRoutesFromSource(source);
    inventory.push({
      module: moduleName,
      basePath: `/${args.appname}/${moduleName}`,
      file: fullPath,
      routes
    });
  }

  const out = args.out ? path.resolve(args.out) : null;
  const json = JSON.stringify(
    {
      generated_at: new Date().toISOString(),
      appname: args.appname,
      monolith_root: monolithRoot,
      modules: inventory
    },
    null,
    2
  );

  if (out) {
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, json);
    console.log(`Wrote ${inventory.length} route modules to ${out}`);
  } else {
    console.log(json);
  }
}

main();

