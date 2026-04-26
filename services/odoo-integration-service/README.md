# Odoo Integration Service

This service is the integration bridge between the CRM platform and Odoo.

## Scope

- Odoo connection management
- Odoo read APIs for contacts, companies, leads, opportunities, sales orders, invoices, products, inventory
- Magento-to-Odoo sync orchestration (customers and orders)

This service does not replace Odoo business logic.

## Environment

- `PORT` (default `7200`)
- `ODOO_BASE_URL` (default `http://odoo:8069`)
- `ODOO_DB`
- `ODOO_USERNAME`
- `ODOO_PASSWORD`
- `ODOO_API_KEY` (preferred over password when available)
- `MAGENTO_API_BASE_URL` (default `http://magento-integration-service:7190`)

## Routes

- `GET /health`
- `GET /v1/odoo/connection`
- `POST /v1/odoo/connect`
- `POST /v1/odoo/disconnect`
- `GET /v1/odoo/contacts`
- `GET /v1/odoo/companies`
- `GET /v1/odoo/leads`
- `GET /v1/odoo/opportunities`
- `GET /v1/odoo/sales-orders`
- `GET /v1/odoo/invoices`
- `GET /v1/odoo/products`
- `GET /v1/odoo/inventory`
- `POST /v1/odoo/sync/magento/customers`
- `POST /v1/odoo/sync/magento/orders`
- `POST /v1/odoo/sync/magento/all`

All `/v1/*` routes require:

- `Authorization: Bearer <token>`
- `X-Org-Id: <org-id>`
- `X-User-Id: <user-id>`

Read endpoints allow:

- `org_viewer`, `org_staff`, `org_manager`, `org_admin`, `org_owner`

Connect/disconnect/sync endpoints allow:

- `org_manager`, `org_admin`, `org_owner`

## Sync behavior

- `dryRun` defaults to `true`
- Push sync requires explicit `dryRun: false` and `push: true`
- Customer idempotency key: `ref = magento:{customer_id}`
- Order idempotency key: `client_order_ref = magento:{increment_id}`
- First version does not auto-post invoices or auto-capture payments

## Security notes

- Credentials are env-backed, with optional in-memory org-level override via `/connect`.
- The service never returns Odoo password or API key.
- Do not log sensitive credentials.
- TODO: Production must not trust public user-supplied `X-User-Id`/`X-Org-Id`; verified auth layer must set trusted identity headers.
