# Odoo Adoption Plan (Phase 1)

This document tracks the Phase 1 migration scope:

- audit references
- update ownership documentation
- deprecate overlapping services (no removals yet)
- scaffold `odoo-integration-service`
- add gateway and compose wiring

## Ownership Baseline

| Capability | Source of truth |
|---|---|
| Public storefront | Magento |
| Cart/checkout | Magento |
| Online orders | Magento, synced to Odoo |
| Product master | Odoo default master, Magento mirror by SKU |
| Inventory | Odoo |
| CRM contacts/companies | Odoo |
| Leads/opportunities | Odoo |
| Sales orders | Odoo |
| Invoices/payments/accounting | Odoo |
| Taxes | Odoo |
| Notifications/realtime UX | Custom services |
| Organization/workspace/user tenancy | Custom organization/auth layer |
| Magento connection/sync | `magento-integration-service` |
| Odoo connection/sync | `odoo-integration-service` |

## Repo Audit Matrix

| Service/reference | Classification | Current usage | Replacement owner | Migration action | Risk | Status |
|---|---|---|---|---|---|---|
| Removed CRM service directory | removed legacy service | Service directory removed after runtime and gateway cutover. | Odoo | Use canonical Odoo APIs only. | Low | removed |
| Removed Billing service directory | removed legacy service | Service directory removed after runtime and gateway cutover. | Odoo | Use canonical Odoo APIs only. | Low | removed |
| `services/commerce-service` | active runtime service | Legacy commerce service still started in compose; frontend still has compatibility client code. | Magento + Odoo split | Mark deprecated; avoid new logic; migrate callers to Magento/Odoo bridges. | Medium (legacy admin flows). | phase-1 deprecated |
| `services/magento-integration-service/src/index.ts` | active runtime service | Canonical integration bridge for `/v1/magento/*`, includes sync to CRM/billing (legacy target). | Magento bridge (kept) | Keep service; later retarget sync flows to Odoo bridge. | Medium | active |
| `services/odoo-integration-service` | active runtime service | New scaffold added with health, identity middleware, and `/v1/odoo/*` placeholder routes. | Odoo bridge | Implement Odoo client/read/sync in Phase 2+. | Low (scaffold only). | scaffolded |
| `gateway/nginx/nginx.conf` (`/api/crm/*`) | gateway route | CRM compatibility route removed from gateway. | Odoo | Use canonical `/api/odoo/*` endpoints. | Medium | removed |
| `gateway/nginx/nginx.conf` (`/api/billing/*`, `/api/invoice*`) | gateway route | Billing/invoice compatibility routes removed from gateway. | Odoo | Use canonical `/api/odoo/*` endpoints. | Medium | removed |
| `gateway/nginx/nginx.conf` (`/api/shop/*`) | deprecated legacy code | Legacy alias removed from gateway after cutover check. | Magento | Use canonical `/api/magento/*` only. | Low | removed |
| `gateway/nginx/nginx.conf` (`/api/integrations/magento*`) | deprecated legacy code | Legacy alias removed from gateway after cutover check. | Magento | Use canonical `/api/magento/*` only. | Low | removed |
| `gateway/nginx/nginx.conf` (`/api/magento/*`) | gateway route | Canonical Magento integration route. | Magento | Keep canonical route. | Low | active |
| `gateway/nginx/nginx.conf` (`/api/odoo/*`) | gateway route | New canonical Odoo integration route to `odoo-integration-service`. | Odoo | Added in Phase 1. | Low | active |
| `infra/k8s/base/gateway/nginx.conf` | K8s manifest | Mirrors gateway routes, now includes `/api/odoo/*`. | Odoo + Magento + compat | Keep parity with Docker gateway config. | Medium (route drift risk). | updated |
| `infra/compose/docker-compose.apps.yml` | compose service | Active service runtime declarations. | Platform orchestration | Added `odoo-integration-service`; removed CRM/Billing runtime entries. | Low | updated |
| `infra/compose/docker-compose.dev.yml` / `docker-compose.prod.yml` | compose service | Build matrix for local/prod modes. | Platform orchestration | Added `odoo-integration-service` build entries; removed CRM/Billing builds. | Low | updated |
| `services/api-router-service/src/index.ts` (`contact`, `invoice`, `business`) | compatibility routing | Legacy compatibility modules no longer proxy to removed CRM/Billing services. | Odoo | Return deprecation responses (`410`) and direct callers to canonical `/api/odoo/*`. | Medium | updated |
| Removed billing K8s manifest path | K8s manifests | Deprecated billing deployment/service manifests removed from base and overlays. | Odoo | Keep K8s aligned with compose/gateway cutover. | Medium | removed |
| `gateway/krakend/krakend.json` (`/api/crm*`, `/api/contact*`, `/api/invoice*`, `/api/business*`) | KrakenD endpoint manifest | Legacy CRM/Billing endpoint blocks removed. | Odoo + Magento canonical routes | Keep only canonical integration endpoints and supported modules. | Medium | removed |
| `infra/compose/docker-compose.web.yml` / `docker-compose.web-test.yml` | compose service | Nginx dependency graph and web-test restarts. | Platform orchestration | Added `odoo-integration-service` dependency/restart entries. | Low | updated |
| `frontend/micro-app/src/services/contact-service.ts` | frontend API client | Reads from `/api/odoo/contacts` and `/api/odoo/companies`; writes intentionally disabled with deprecation message. | Odoo | Keep read integration and migrate remaining UI write actions to Odoo-native flows. | Medium | in-progress |
| Frontend invoice client | frontend API client | Reads from `/api/odoo/invoices`; writes intentionally disabled with deprecation message. | Odoo | Keep read integration and migrate remaining finance API calls. | Medium | in-progress |
| `frontend/micro-app/src/services/finance-service.ts` | frontend API client | Finance summary/list aggregation now reads via Odoo-backed billing service. | Odoo | Keep parity validation for payout/report semantics. | Medium | done |
| `frontend/micro-app/src/services/commerce-service.ts` | frontend API client | Uses canonical `/api/magento/*`; write actions intentionally blocked with migration message. | Magento | Keep as thin integration layer only. | Low | aligned |
| `frontend/micro-app/src/routes/paths.ts` | documentation/frontend route map | Exposes Magento integration route but no Odoo integration route yet. | Odoo + Magento | Add Odoo admin route in later phase (`/integrations/odoo`). | Low | pending |
| `migration/TRACKER.md` | migration tracker | Existing route migration tracker did not include Odoo adoption rows. | Migration governance | Added Odoo adoption rows for removed CRM/Billing services and `commerce-service`. | Low | updated |

## Current Decisions

- CRM/Billing compatibility routes are removed from active Docker/K8s Nginx gateway configs.
- Compose runtime stacks no longer run legacy CRM/Billing services.
- New Odoo bridge is canonical and reachable via `/api/odoo/*`.
- Credentials for Odoo remain env-based with optional in-memory per-org overrides.

## Phase 2+ Follow-ups

- Implement Odoo client + authenticated read routes.
- Implement dry-run Magento-to-Odoo sync endpoints.
- Frontend reads are migrated off `/api/invoice*` to Odoo-backed clients; keep compatibility gateway routes for non-frontend dependents until wider cutover.
- Retire compatibility routes only after dependency checks and traffic confirmation.
