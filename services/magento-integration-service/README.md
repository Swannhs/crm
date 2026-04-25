# Magento Integration Service

This service connects CRM to an external Magento instance over Magento REST/GraphQL.

Magento itself is intentionally **not** part of this repository's Docker stack.

## Role of this service

This service is not a shop-service replacement.

Magento itself is the shop/eCommerce system. This service only bridges CRM/admin workflows to Magento by:

- testing Magento connection
- fetching Magento stores/products/customers/orders
- syncing Magento customers into CRM contacts
- syncing Magento orders into CRM/billing records
- exposing controlled admin integration APIs
- checking downstream CRM/Billing health

Do not implement catalog, cart, checkout, payment, inventory, shipping, tax, or promotion engines here.

This integration service is for admin/sync/integration workflows.
Public storefront commerce should use Magento storefront/GraphQL APIs.

## Environment

- `PORT` (default: `7190`)
- `MAGENTO_BASE_URL` (optional default Magento URL)
- `MAGENTO_ACCESS_TOKEN` (optional default Magento admin token)
- `MAGENTO_STORE_CODE` (default: `default`)
- `CRM_SERVICE_URL` (default: `http://crm-service:8010`)
- `BILLING_SERVICE_URL` (default: `http://billing-service:7020`)

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

Gateway canonical route: `/api/magento/*`

Deprecated aliases:
- `/api/shop/*` (compat only)
- `/api/integrations/magento/*` (compat only)

## Security notes

- All integration routes require identity context headers: `X-Org-Id`, `X-User-Id`.
- Raw Magento proxy endpoints (`/v1/magento/rest`, `/v1/magento/graphql`) must remain protected.
- Do not expose raw proxy endpoints to public storefront users without strict allowlisting.
