# Odoo + Magento Service Migration (Breaking Cutover Pass)

## Scope

This pass covers:
- full repo reference audit
- architecture ownership documentation
- deprecation banners for overlapping services
- removal of deprecated CRM/Billing service runtime wiring
- removal of deprecated compatibility routes after Odoo cutover

## Audit method

Search terms used:

- `legacy-crm`
- `legacy-billing`
- `commerce-service`
- `shop-service`
- `product-service`
- `cart-service`
- `checkout-service`
- `invoice-service`
- `payment-service`
- `inventory-service`
- `sales-service`
- `lead`
- `opportunity`
- `contact`
- `company`
- `invoice`
- `payment`
- `inventory`
- `sales-order`
- `/api/crm`
- `/api/billing`
- `/api/commerce`
- `/api/shop`
- `/api/magento`

## Migration table

| Area/file/service | Current usage | New owner | Action | Risk | Status |
|---|---|---|---|---|---|
| Removed CRM service directory | removed legacy service | Odoo | service directory removed after runtime/gateway cutover | low | done |
| Removed Billing service directory | removed legacy service | Odoo | service directory removed after runtime/gateway cutover | low | done |
| `services/commerce-service` | legacy commerce runtime service | Magento | keep deprecated until no references remain | old UI/compat endpoints may still call it | pending |
| `gateway/nginx/nginx.conf` `/api/crm/*` | gateway route | Odoo | removed compatibility route; canonical CRM reads are `/api/odoo/*` | medium (legacy external consumers must migrate) | done |
| `gateway/nginx/nginx.conf` `/api/billing/*` + `/api/invoice*` | gateway route | Odoo | removed compatibility routes; canonical accounting reads are `/api/odoo/*` | medium (legacy external consumers must migrate) | done |
| `gateway/nginx/nginx.conf` `/api/shop/*` | deprecated legacy alias to Magento bridge | Magento | removed alias after frontend cutover verification | low | done |
| `gateway/nginx/nginx.conf` `/api/integrations/magento*` | deprecated legacy alias to Magento bridge | Magento | removed alias; canonical route is `/api/magento/*` | low | done |
| `gateway/nginx/nginx.conf` `/api/magento/*` | canonical Magento integration route | Magento | keep canonical | low | active |
| `gateway/nginx/nginx.conf` `/api/odoo/*` | canonical Odoo integration route | Odoo | keep canonical | low | active |
| `frontend/micro-app/src/services/contact-service.ts` | frontend API client (reads now from `/api/odoo/contacts` and `/api/odoo/companies`; writes blocked) | Odoo | keep Odoo reads, keep legacy writes disabled with migration message | medium user-facing impact (write actions intentionally disabled) | in-progress |
| frontend invoice client | frontend API client (reads now from `/api/odoo/invoices`; writes blocked) | Odoo | keep Odoo reads, keep legacy writes disabled with migration message | medium user-facing impact (write actions intentionally disabled) | in-progress |
| `frontend/micro-app/src/services/finance-service.ts` | frontend finance aggregation now reads through Odoo-backed billing client | Odoo | completed migration from `/api/invoice*`; keep monitoring payout/report parity | medium | done |
| `frontend/micro-app/src/services/commerce-service.ts` | frontend API client calling `/api/magento/*` | Magento | keep as thin Magento integration client | low | active |
| `infra/compose/docker-compose.apps.yml` | compose runtime declarations | Custom platform | removed deprecated CRM/Billing runtime services; kept canonical Magento/Odoo bridges | medium | done |
| `infra/compose/docker-compose.dev.yml` / `docker-compose.prod.yml` | compose build declarations | Custom platform | removed deprecated CRM/Billing service build entries | medium | done |
| `infra/compose/docker-compose*.yml` (CRM/Billing runtime wiring) | compose runtime/build wiring | Odoo | removed from compose stacks after Odoo cutover | medium (legacy callers must use Odoo canonical APIs) | done |
| `infra/k8s/base/gateway/nginx.conf` | k8s gateway manifest | Custom platform | keep route parity with Docker gateway (`/api/magento/*`, `/api/odoo/*`) | medium | active |
| Removed billing manifest path + overlay refs | k8s manifest | Odoo | removed deprecated billing manifests and overlay references | medium | done |
| `gateway/krakend/krakend.json` | gateway manifest | Odoo + Magento canonical routes | removed legacy `/api/crm*`, `/api/contact*`, `/api/invoice*`, `/api/business*` endpoint blocks | medium | done |
| `migration/TRACKER.md` | migration tracker | Custom platform | maintain explicit status rows for `legacy-crm`, `legacy-billing`, `commerce-service` | low | active |
| `contracts/events/*` (`billing.payment.recorded`, `billing.invoice.created`, `crm.contact.*`) | event contracts | Odoo (target domain) | keep until event migration to Odoo-integrated flow is designed | medium | pending |
| `services/api-router-service/src/index.ts` | compatibility router for legacy `/api/*` modules | Custom platform | removed CRM/Billing proxy behavior; returns deprecation (`410`) for `contact`/`invoice`/`business` compat modules | medium | in-progress |

## Classification summary

- runtime service: `commerce-service`, `magento-integration-service`, `odoo-integration-service` (CRM/Billing service directories removed)
- frontend API client: `contact-service.ts`, invoice client, `commerce-service.ts`
- frontend page: multiple `frontend/micro-app/src/sections/**` usage paths for contact/billing/commerce flows
- gateway route: `gateway/nginx/nginx.conf`
- compose service: `infra/compose/docker-compose*.yml`
- k8s manifest: `infra/k8s/base/gateway/nginx.conf`
- documentation: `README.md`, service READMEs
- migration tracker: `migration/TRACKER.md`
- test/demo code: e2e and parity docs under `frontend/micro-app/docs` and `cypress`
- deprecated legacy code: old route mappings in compatibility router

## Cutover outcome

- CRM/Billing service directories were removed after migration cutover.
- Overlapping services are explicitly deprecated or replaced by canonical Magento/Odoo routes.
- Ownership is documented as Magento + Odoo first.
- Legacy compatibility routes removed in gateway/router must be treated as breaking for external consumers.
