# Magento Integration Service

This service connects CRM to an external Magento instance over Magento REST/GraphQL.

Magento itself is intentionally **not** part of this repository's Docker stack.

## Role of this service

This service is not a shop-service replacement.

Magento itself is the shop/eCommerce system. This service only bridges CRM/admin workflows to Magento by:

- testing Magento connection
- fetching Magento stores/products/customers/orders
- exposing Magento read APIs for downstream Odoo sync workflows
- exposing controlled admin integration APIs

Do not implement catalog, cart, checkout, payment, inventory, shipping, tax, or promotion engines here.

This integration service is for admin/sync/integration workflows.
Public storefront commerce should use Magento storefront/GraphQL APIs.

## Environment

- `PORT` (default: `7190`)
- `MAGENTO_BASE_URL` (optional default Magento URL)
- `MAGENTO_ACCESS_TOKEN` (optional default Magento admin token)
- `MAGENTO_STORE_CODE` (default: `default`)

## Main routes

- `POST /v1/magento/connect`
- `GET /v1/magento/connection`
- `POST /v1/magento/disconnect`
- `GET /v1/magento/stores`
- `GET /v1/magento/products`
- `GET /v1/magento/orders`
- `GET /v1/magento/customers`
- `POST /v1/magento/graphql`
- `POST /v1/magento/rest`
- `POST /v1/magento/sync/customers`
- `POST /v1/magento/sync/orders`

`/v1/magento/sync/customers` and `/v1/magento/sync/orders` are deprecated and now return `410 Gone`.
Use Odoo bridge endpoints instead:
- `/api/odoo/sync/magento/customers`
- `/api/odoo/sync/magento/orders`

Gateway canonical route: `/api/magento/*`

Deprecated aliases:
- removed (use canonical `/api/magento/*`)

## Security notes

- All integration routes require identity context headers: `X-Org-Id`, `X-User-Id`.
- Raw Magento proxy endpoints (`/v1/magento/rest`, `/v1/magento/graphql`) must remain protected.
- Do not expose raw proxy endpoints to public storefront users without strict allowlisting.
