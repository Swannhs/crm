# Migration Tracker

This is a living checklist. The monolith currently mounts `server/routes/<name>.js` under `/api/<name>/*`.

Status legend:
- `planned`: identified, not started
- `scaffolded`: service exists, endpoints stubbed
- `partial`: some endpoints implemented
- `done`: full parity (including auth + validation + persistence)

## Route Modules (Initial Cut)

| Monolith Route Module | Monolith Base Path | Target Service | Status |
|---|---|---|---|
| `contact` | `/api/contact/*` | Odoo (`/api/odoo/contacts`) | deprecated-compat-410 |
| `invoice` | `/api/invoice/*` | Odoo (`/api/odoo/invoices`) | deprecated-compat-410 |
| `booking` | `/api/booking/*` | `booking-service` (Node/Express) | scaffolded |
| `community` | `/api/community/*` | `community-service` (Node/Express) | planned |
| `shopv2` | `/api/shopv2/*` | Deprecated legacy mapping (migrate to Magento storefront APIs and `/api/magento/*` admin integration) | planned-deprecated |
| `user` | `/api/user/*` | `identity-service` (Keycloak + thin BFF) | planned |

## Odoo Adoption Tracker

| Legacy Service | New Ownership | Migration Status | Notes |
|---|---|---|---|
| `legacy-crm` | Odoo (`odoo-integration-service`) | removed-from-repo | Service directory removed; canonical APIs are `/api/odoo/*`. |
| `legacy-billing` | Odoo (`odoo-integration-service`) | removed-from-repo | Service directory removed; canonical APIs are `/api/odoo/*`. |
| `commerce-service` | Magento storefront + Odoo back-office split | deprecated-phase-1 | Admin integration should use `/api/magento/*` and `/api/odoo/*`. |
| Frontend CRM/Billing invoice reads (`contact-service`, invoice client, `finance-service`) | Odoo (`/api/odoo/*`) | migrated-phase-2 | Frontend reads now use Odoo-backed APIs; legacy write actions are intentionally blocked with migration messaging. |
| Gateway compatibility aliases (`/api/shop/*`, `/api/integrations/magento*`, `/api/billing/*`, `/api/invoice*`, `/api/crm*`) | Magento/Odoo canonical routes | cleanup-phase-2 | Removed from Docker/K8s Nginx gateway; canonical routes are `/api/magento/*` and `/api/odoo/*`. |
| KrakenD legacy CRM/Billing endpoints (`/api/crm*`, `/api/contact*`, `/api/invoice*`, `/api/business*`) | Odoo/Magento canonical routes | cleanup-phase-3 | Removed endpoint blocks from `gateway/krakend/krakend.json` (102 endpoints removed, including `/api/billing/health`). |

## Notes

- KrakenD still exposes legacy endpoint shapes, but CRM/Billing backends are now routed through `api-router-service` compatibility behavior.
- For “done”, we also need background jobs + sockets parity (monolith uses Socket.IO namespace `/${APPNAME}`).
