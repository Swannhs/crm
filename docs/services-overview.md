# Services Overview

This document summarizes what each backend service in `microservices/services` is responsible for, based on current code and compose wiring.

## Active Runtime Services

### `api-router-service` (port `7001`)
- Purpose: compatibility and aggregation API layer in front of multiple domain services.
- What it does:
  - Proxies module-style routes (`/api/:module/*`) to upstream services.
  - Enforces identity headers for protected compatibility routes.
  - Provides cross-service aggregates (billing/sales/dashboard-style combined responses).
  - Returns explicit deprecation/not-implemented responses for legacy modules.
- Notes:
  - Magento bridge calls are currently disabled in code.
  - Key file: `services/api-router-service/src/index.ts`.

### `organization-service` (port `7010`)
- Purpose: organization/workspace domain and access control.
- What it does:
  - Organization settings/workspace endpoints.
  - Location management.
  - Membership and RBAC user access operations.
  - CRM configuration entities (teams, pipelines, custom fields, automation).
  - Onboarding status endpoints.
- Notes:
  - Uses identity and role authorization middleware (`org_owner`, `org_admin`, `org_manager`).
  - Key file: `services/organization-service/src/index.ts`.

### `realtime-service` (port `7030`)
- Purpose: livechat/omnichannel messaging + realtime socket events.
- What it does:
  - REST endpoints for livechat channels/messages/contacts/widget settings/statistics.
  - Omni conversation/message endpoints.
  - Socket.IO server for org/channel/contact presence + updates.
  - Kafka consumer for domain events (`billing.payment.recorded`, `omni.message.received`) and realtime fanout.
- Notes:
  - Also exposes placeholder notifications endpoints.
  - Key file: `services/realtime-service/src/index.ts`.

### `booking-service` (port `7040`)
- Purpose: booking and appointment APIs.
- What it does:
  - Booking type CRUD (`/v1/booking-types`).
  - Appointment CRUD, public booking creation, and available slots (`/v1/appointments`).
  - Swagger docs endpoint (`/api-docs`).
- Notes:
  - NestJS service.
  - Key files: `services/booking-service/src/main.ts`, `services/booking-service/src/modules/*`.

### `integrations-service` (port `7140`)
- Purpose: external connectors and integration operations hub.
- What it does:
  - Generic connect/disconnect/list integration endpoints.
  - Provider-specific flows: Google, Zoom, Facebook, Instagram, LinkedIn, TikTok, Shopify, Magento, UberEats, EasyPost, WhatsApp, Telegram, Odoo.
  - Public webhook handlers (WhatsApp/Telegram).
  - Image library endpoints (`/v1/image-library`).
  - Starts an Omni send Kafka consumer.
- Notes:
  - Depends on `odoo-integration-service` for Odoo bridge calls.
  - Key file: `services/integrations-service/src/index.ts`.

### `email-sync-service` (port `7160`)
- Purpose: email integration and sync API surface.
- What it does:
  - Routes under `/api/v1/email` for account connect/callback/messages/send/templates/sequences.
  - OAuth flow scaffold for Gmail.
- Notes:
  - Many endpoints are currently scaffolded with TODO implementations.
  - Key files: `services/email-sync-service/src/index.ts`, `services/email-sync-service/src/routes/email.routes.ts`.

### `odoo-integration-service` (port `7200`)
- Purpose: Odoo bridge and back-office source-of-truth API.
- What it does:
  - Contacts/CRM/sales/accounting/inventory/projects/posts/employees APIs.
  - POS endpoints (catalog, carts, orders, shifts, tables, KDS, inventory adjustments).
  - Analytics and dashboard endpoints.
  - Booking bridge endpoints.
  - Sync endpoints (including Magento sync compatibility paths).
  - Magento compatibility endpoints still present in this service.
- Notes:
  - NestJS modular service with many domain modules.
  - Key files: `services/odoo-integration-service/src/app.module.ts`, `services/odoo-integration-service/src/modules/*`.

### `magento-service`
- Purpose: local Magento runtime codebase (PHP application source) used when Magento is enabled.
- What it does:
  - Hosts Magento application code and Magento-specific runtime scripts/docker assets.
- Notes:
  - Not a Node microservice like others; this is a Magento app directory.
  - You have recently disabled Magento integration in the current platform routing.

## Service Folders Present but Not Runnable Here

### `commerce-service`
- Current state in this workspace:
  - Only generated Prisma artifacts are present.
  - No runtime source entrypoint (`src/index.ts`/`main.ts`) detected.
- Interpretation:
  - Likely deprecated, relocated, or not checked in fully in this branch.

### `community-service`
- Current state in this workspace:
  - Only generated Prisma artifacts are present.
  - No runtime source entrypoint detected.
- Interpretation:
  - Likely deprecated, relocated, or incomplete in this branch.

### `notification-service`
- Current state in this workspace:
  - Only generated Prisma artifacts are present.
  - No runtime source entrypoint detected.
- Interpretation:
  - Likely deprecated, relocated, or incomplete in this branch.

## Platform Dependencies (Non-service Containers)

- `keycloak`: identity provider.
- `kafka`: event bus.
- `redis`: cache/realtime support.
- `odoo`: Odoo ERP application.

These are defined in compose platform files and support the runtime services above.
