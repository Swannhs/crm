# Commerce Service (Legacy / Deprecated Direction)

This service remains in the repository for backward compatibility and migration safety.

## Important

Magento is the eCommerce source of truth for this platform.

Do not add new catalog, cart, checkout, order, payment, inventory, shipping, tax, or promotion logic here.

Use:

- `services/magento-integration-service` for CRM/admin integration workflows
- Magento storefront/GraphQL APIs for public storefront commerce

## Migration note

Legacy `/api/shop/*` usage should migrate to canonical `/api/magento/*` for admin integration,
and public storefront traffic should move to Magento storefront APIs directly.
