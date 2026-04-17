# Migration

This folder tracks the migration from the current monolith (`../server`) to the microservices platform.

## How The Monolith Routes Work

The monolith auto-loads every file in `server/routes/*.js` and mounts it as:

`/{APPNAME}/{filename}`

Where `APPNAME` is usually `api` (see root `docker-compose.yml`).

Example:
- `server/routes/contact.js` => `/api/contact/*`

## Workflow

1. Generate a route inventory:

```bash
node tools/route-inventory.mjs --out migration/route-inventory.json
```

2. Update `TRACKER.md` to map route modules to microservices.
3. Implement services incrementally and update KrakenD routes to match the monolith API surface.

