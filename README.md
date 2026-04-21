# crm

# Microservices (New Architecture)

This directory contains the new microservices-based backend for **mymanager**.

**Core building blocks**
- API Gateway: **KrakenD** (`microservices/gateway/krakend`)
- AuthN/AuthZ: **Keycloak** (`microservices/auth/keycloak`)
- Event-driven backbone: **RabbitMQ** (local via compose; Kubernetes manifests planned)
- Container orchestration: **Kubernetes** (`microservices/infra/k8s` - starting scaffold)

**Identity propagation**
The gateway validates the Keycloak JWT, then propagates identity context headers to downstream services:
- `X-User-Id` (from `sub`)
- `X-Org-Id` (from `org_id`)

Services should rely on these headers for multi-tenant request scoping.

## Docker Modes

The Docker stack now supports three intended modes:

- `development`: local coding with bind mounts, watchers, and fast feedback
- `web-test`: production-like runtime commands plus seeded dummy data for demos/QA
- `production`: production-oriented commands and env wiring for real-user environments

### Local development

```bash
cd microservices
yarn compose:dev
```

This mode keeps the current repo-mounted workflow:
- `tsx watch` / `next dev`
- Prisma `db push` on service boot where needed
- local ports published for direct debugging

### Web testing with dummy data

```bash
cd microservices
yarn compose:web-test
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
yarn compose:prod
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
- KrakenD: `http://localhost:8081`

Smoke tests:
- `GET http://localhost:8081/health`

## Services

Services live under `microservices/services/*`.

- `crm-service` (Laravel): contacts and CRM primitives (multi-tenant via `X-Org-Id`)
- `organization-service` (Node/Express): org metadata and settings
- `billing-service` (Node/Express): invoices and billing events
- `notification-service` (Node worker): consumes events and delivers notifications
- `realtime-service` (Node + Socket.IO): real-time updates channel (event fanout)
