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

## Local Development

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
