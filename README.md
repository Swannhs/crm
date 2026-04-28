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
That addon is for local dev/demo only and is not the production CRM runtime model.

Odoo is also expected to run as an external system in normal environments.

Canonical gateway route is `/api/magento/*`.
Legacy `/api/shop/*` and `/api/integrations/magento/*` compatibility aliases were removed in this branch.

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

### Remaining service scope notes

- `services/commerce-service`: deprecated legacy compatibility only, no new business features.
- `services/finance-service`: platform-specific reporting/aggregation only, not accounting source of truth.
- `services/payments-service`: platform payment integration/orchestration only, not accounting source of truth.
- `services/pos-service`: pending ownership decision; treat as legacy until Odoo POS replacement/cutover is finalized.

## Docker Modes

The Docker stack now supports three intended modes:

- `development`: local coding with bind mounts, watchers, and fast feedback
- `web-test`: production-like runtime commands plus seeded dummy data for demos/QA
- `production`: production-oriented commands and env wiring for real-user environments

Compose layout is now organized per environment and per concern:

- `infra/compose/dev/`
- `infra/compose/test/`
- `infra/compose/prod/`

Each environment has exactly:

- `docker-compose.databases.yml`
- `docker-compose.platform.yml`
- `docker-compose.services.yml`
- `docker-compose.ui.yml`
- `docker-compose.gateway.yml`
- `docker-compose.yml` (entrypoint that includes the five files above)

### Local development

Use the unified manager:

```bash
./manage.sh dev up
```

Magento and its local infrastructure are exposed at:

- `http://localhost:8088`
- `https://localhost:8448`
- `localhost:33306` (Magento MySQL)
- `localhost:9201` (Magento OpenSearch)

The Magento integration service will default to internal base URL `http://magento`.

Magento runs from source code mounted to:

- default: Docker named volume `magento_app_data` -> `/var/www/html`
- on first boot, container clones `https://github.com/magento/magento2` and installs Magento automatically
- override host source path with `MAGENTO_SOURCE_DIR` if you want to mount your own checkout

Example override:

```bash
MAGENTO_SOURCE_DIR=../../my-magento-src ./manage.sh dev up
```

On first run, if `/var/www/html` is empty, the Magento container:
- clones Magento 2 from `MAGENTO_GIT_URL` at `MAGENTO_GIT_REF`
- runs `composer install`
- runs `bin/magento setup:install` against `magento-db` and `magento-search`

You can pin the branch/tag with:

```bash
MAGENTO_GIT_REF=2.4.7-p1 ./manage.sh dev up
```

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
./manage.sh test up
```

This mode uses `infra/compose/test/*` and provides:
- frontend runs with `next build && next start`
- Node services switch from watch mode to `build && start`
- a one-shot `seed-dummy-data` container populates projects, contacts, and invoices
- good for shared QA environments, demos, or browser-based review

The dummy seeder reads Docker-friendly env vars from:
- `.env.docker.web-test.example`

### Production mode

1. Copy the example env file and replace placeholders:

```bash
cp .env.docker.prod.example .env.docker.prod
```

2. Start the production-oriented stack:

```bash
./manage.sh prod up
```

This mode uses `infra/compose/prod/*` and provides:
- frontend and Node services run in `NODE_ENV=production`
- services use `build && start` rather than watch mode
- restart policies are enabled for long-running services
- env values are pulled from `.env.docker.prod`

This is intended as the repo’s “real user” compose entrypoint until a fully image-driven deployment pipeline replaces the current source-mounted setup.

## Previous Local Development

Start the platform stack:

```bash
docker compose -f microservices/infra/compose/dev/docker-compose.yml up --build
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
