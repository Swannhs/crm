# crm

# Microservices (New Architecture)

This directory contains the new microservices-based backend for **mymanager**.

**Core building blocks**
- API Gateway: **Nginx** (`gateway/nginx/nginx.conf`)
- Legacy gateway config (compat only): **KrakenD** (`gateway/krakend/krakend.json`)
- AuthN/AuthZ: **Keycloak** (`microservices/auth/keycloak`)
- Event-driven backbone: **RabbitMQ** (local via compose; Kubernetes manifests planned)
- Container orchestration: **Kubernetes** (`microservices/infra/k8s` - starting scaffold)

**Identity propagation**
The gateway validates the Keycloak JWT, then propagates identity context headers to downstream services:
- `X-User-Id` (from `sub`)
- `X-Org-Id` (from `org_id`)

Services should rely on these headers for multi-tenant request scoping.

## eCommerce / shop architecture

Magento is the eCommerce system for this platform.

Magento owns catalog, categories, cart, checkout, orders, payments, inventory, shipping, tax, and promotions.

The CRM platform does not implement a separate shop-service for these responsibilities.

CRM integrates with Magento through:

- `services/magento-integration-service`
- Nginx route: `/api/magento/*`
- Magento REST/GraphQL APIs

Magento runs as a separate Docker stack/project by default.

For local development, you can opt in to a full local Magento Open Source addon (Magento app + MySQL + OpenSearch) with this repository's orchestrator script.

Canonical gateway route is `/api/magento/*`.
Legacy `/api/shop/*` routes are deprecated compatibility aliases and should be migrated.
Legacy `/api/integrations/magento/*` naming is also deprecated and now aliases to `/api/magento/*`.

### Capability ownership

| Capability | Source of truth |
|---|---|
| Products | Magento |
| Categories | Magento |
| Prices | Magento |
| Cart | Magento |
| Checkout | Magento |
| Orders | Magento |
| Payments | Magento/payment gateway |
| Inventory | Magento |
| Shipping | Magento |
| Tax | Magento |
| Promotions/coupons | Magento |
| Contacts | Odoo |
| Companies | Odoo |
| Sales activities | Odoo |
| Customer notes/timeline | Odoo |
| Organization users/roles | Organization service |
| Billing summaries/reporting | Odoo accounting/invoice data |
| Magento connection and sync state | Magento integration service |

## Docker Modes

The Docker stack now supports three intended modes:

- `development`: local coding with bind mounts, watchers, and fast feedback
- `web-test`: production-like runtime commands plus seeded dummy data for demos/QA
- `production`: production-oriented commands and env wiring for real-user environments

### Local development

```bash
cd microservices
./compose-dev.sh
```

Or use the unified manager and include local Magento:

```bash
./manage.sh dev up --with-magento
```

When enabled, Magento and its local infrastructure are exposed at:

- `http://localhost:8088`
- `https://localhost:8448`
- `localhost:33306` (Magento MySQL)
- `localhost:9201` (Magento OpenSearch)

The Magento integration service will default to internal base URL `http://magento`.

Magento runs from source code mounted to:

- default: `<repo>/services/magento-service` -> `/var/www/html` in container
- override host source path with `MAGENTO_SOURCE_DIR`

Example:

```bash
MAGENTO_SOURCE_DIR=../../my-magento-src ./manage.sh dev up --with-magento
```

On first run, if the mounted source directory is empty, the Magento container bootstraps Magento Open Source into it.

If you already have Magento running elsewhere, keep using your external URL:

```bash
MAGENTO_BASE_URL='http://host.docker.internal:8088' ./manage.sh dev up
```

This mode keeps the current repo-mounted workflow:
- `tsx watch` / `next dev`
- Prisma `db push` on service boot where needed
- local ports published for direct debugging

### Web testing with dummy data

```bash
cd microservices
./compose-web-test.sh
```

This mode layers `infra/compose/docker-compose.web-test.yml` on top of the base stack:
- frontend runs with `next build && next start`
- Node services switch from watch mode to `build && start`
- a one-shot `seed-dummy-data` container populates projects, contacts, and invoices
- good for shared QA environments, demos, or browser-based review

The dummy seeder reads Docker-friendly env vars from:
- `.env.docker.web-test.example`

### Production mode

1. Copy the example env file and replace placeholders:

```bash
cd microservices
cp .env.docker.prod.example .env.docker.prod
```

2. Start the production-oriented stack:

```bash
./compose-prod.sh
```

This mode layers `infra/compose/docker-compose.prod.yml` on top of the base stack:
- frontend and Node services run in `NODE_ENV=production`
- services use `build && start` rather than watch mode
- restart policies are enabled for long-running services
- env values are pulled from `.env.docker.prod`

This is intended as the repo’s “real user” compose entrypoint until a fully image-driven deployment pipeline replaces the current source-mounted setup.

## Previous Local Development

Start the platform stack:

```bash
docker compose -f microservices/infra/compose/docker-compose.yml up --build
```

Key endpoints (defaults):
- Keycloak: `http://localhost:8080` (admin/admin)
- Nginx gateway: `http://localhost:8081`

Smoke tests:
- `GET http://localhost:8081/health`

## Services

Services live under `microservices/services/*`.

- `organization-service` (Node/Express): org metadata and settings
- `odoo-integration-service` (Node/TypeScript): Odoo ERP/CRM/accounting bridge
- `notification-service` (Node worker): consumes events and delivers notifications
- `realtime-service` (Node + Socket.IO): real-time updates channel (event fanout)
