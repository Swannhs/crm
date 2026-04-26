function asString(value: string | undefined, fallback = ""): string {
  return (value || fallback).trim();
}

export const config = {
  port: Number(process.env.PORT || 7200),
  odooBaseUrl: asString(process.env.ODOO_BASE_URL, "http://odoo:8069").replace(/\/+$/, ""),
  odooDb: asString(process.env.ODOO_DB),
  odooUsername: asString(process.env.ODOO_USERNAME),
  odooPassword: asString(process.env.ODOO_PASSWORD),
  odooApiKey: asString(process.env.ODOO_API_KEY),
  magentoApiBaseUrl: asString(process.env.MAGENTO_API_BASE_URL, "http://magento-integration-service:7190").replace(/\/+$/, ""),
} as const;
