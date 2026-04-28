# Magento Inegration Service (Laravel)

This service proxies Magento REST/GraphQL through Laravel and is reachable via gateway at:

- `/api/magento/health`
- `/api/magento/orders`
- `/api/magento/products`
- `/api/magento/customers`
- `/api/magento/graphql`

## Environment

Set these in `services/magento-integration-service/.env` (or via Docker compose env):

- `MAGENTO_BASE_URL=http://magento`
- `MAGENTO_STORE_CODE=default`
- `MAGENTO_ADMIN_USERNAME=admin`
- `MAGENTO_ADMIN_PASSWORD=admin123`
- `MAGENTO_ACCESS_TOKEN=` (optional; overrides username/password token flow)
- `MAGENTO_TIMEOUT_SECONDS=20`

Operational defaults for this API service:

- `SESSION_DRIVER=file`
- `CACHE_STORE=file`
- `QUEUE_CONNECTION=sync`

## Local smoke test

```bash
curl -H 'X-Org-Id: demo-org' -H 'X-User-Id: demo-user' \
  http://localhost:8081/api/magento/health
```

If Magento is reachable, response includes `connected: true`.
