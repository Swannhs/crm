function requiredEnv(name: string): string {
  const value = process.env[name]?.trim();
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

export const API_ROUTER_CONFIG = {
  keycloakTokenUrl: requiredEnv('KEYCLOAK_TOKEN_URL'),
  keycloakClientId: requiredEnv('KEYCLOAK_CLIENT_ID'),
  odooIntegrationBaseUrl: requiredEnv('ODOO_INTEGRATION_BASE_URL'),
  bookingServiceBaseUrl: requiredEnv('BOOKING_SERVICE_BASE_URL'),
  scoringServiceBaseUrl: requiredEnv('SCORING_SERVICE_BASE_URL'),
  communityServiceBaseUrl: requiredEnv('COMMUNITY_SERVICE_BASE_URL'),
  documentsServiceBaseUrl: requiredEnv('DOCUMENTS_SERVICE_BASE_URL'),
  paymentsServiceBaseUrl: requiredEnv('PAYMENTS_SERVICE_BASE_URL'),
  employeesServiceBaseUrl: requiredEnv('EMPLOYEES_SERVICE_BASE_URL'),
  organizationServiceBaseUrl: requiredEnv('ORGANIZATION_SERVICE_BASE_URL'),
  integrationsServiceBaseUrl: requiredEnv('INTEGRATIONS_SERVICE_BASE_URL'),
  financeServiceBaseUrl: requiredEnv('FINANCE_SERVICE_BASE_URL'),
  realtimeServiceBaseUrl: requiredEnv('REALTIME_SERVICE_BASE_URL'),
  monolithBaseUrl: requiredEnv('MONOLITH_BASE_URL'),
};

export { requiredEnv };
