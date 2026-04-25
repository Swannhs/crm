describe('Magento integration admin page', () => {
  beforeEach(() => {
    cy.loginToKeycloak('appuser', 'Appuser123!');
  });

  it('renders disconnected state and keeps token input masked', () => {
    cy.intercept('GET', '**/api/magento/connection', {
      statusCode: 200,
      body: { data: { connected: false, message: 'Not connected' } },
    }).as('connection');

    cy.intercept('GET', '**/api/magento/downstream/health', {
      statusCode: 200,
      body: {
        data: {
          crm: { ok: false, message: 'unreachable' },
          billing: { ok: false, message: 'unreachable' },
        },
      },
    }).as('downstreamHealth');

    cy.intercept('GET', '**/api/magento/stores', {
      statusCode: 200,
      body: { data: [] },
    }).as('stores');

    cy.visit('/integrations/magento');

    cy.wait(['@connection', '@downstreamHealth', '@stores']);
    cy.contains('Magento Integration').should('be.visible');
    cy.contains('Connected:').should('be.visible');
    cy.contains('No').should('be.visible');

    cy.get('[data-testid="magento-access-token-input"]').should('have.attr', 'type', 'password');
  });

  it('sends dry-run true for manual customer sync by default', () => {
    cy.intercept('GET', '**/api/magento/connection', {
      statusCode: 200,
      body: { data: { connected: true, baseUrl: 'https://example.magento.local' } },
    }).as('connection');

    cy.intercept('GET', '**/api/magento/downstream/health', {
      statusCode: 200,
      body: { data: { crm: { ok: true }, billing: { ok: true } } },
    }).as('downstreamHealth');

    cy.intercept('GET', '**/api/magento/stores', {
      statusCode: 200,
      body: { data: [] },
    }).as('stores');

    cy.intercept('GET', '**/api/magento/products*', {
      statusCode: 200,
      body: { data: { items: [], total_count: 0 } },
    }).as('products');

    cy.intercept('GET', '**/api/magento/customers*', {
      statusCode: 200,
      body: { data: { items: [], total_count: 0 } },
    }).as('customers');

    cy.intercept('GET', '**/api/magento/orders*', {
      statusCode: 200,
      body: { data: { items: [], total_count: 0 } },
    }).as('orders');

    cy.intercept('POST', '**/api/magento/sync/customers', (req) => {
      expect(req.body).to.have.property('dryRun', true);
      req.reply({
        statusCode: 200,
        body: {
          data: {
            dryRun: true,
            entity: 'customers',
            seen: 0,
            pushed: 0,
            skipped: 0,
            errors: [],
            message: 'Dry run complete',
          },
        },
      });
    }).as('syncCustomers');

    cy.visit('/integrations/magento');
    cy.wait(['@connection', '@downstreamHealth', '@stores']);

    cy.get('[data-testid="magento-sync-dry-customers"]').click();
    cy.wait('@syncCustomers');
    cy.contains('Latest sync result').should('be.visible');
    cy.contains('dryRun: true').should('be.visible');
  });

  it('requires confirmation before push sync and sends push payload', () => {
    cy.intercept('GET', '**/api/magento/connection', {
      statusCode: 200,
      body: { data: { connected: true, baseUrl: 'https://example.magento.local' } },
    }).as('connection');

    cy.intercept('GET', '**/api/magento/downstream/health', {
      statusCode: 200,
      body: { data: { crm: { ok: true }, billing: { ok: true } } },
    }).as('downstreamHealth');

    cy.intercept('GET', '**/api/magento/stores', {
      statusCode: 200,
      body: { data: [] },
    }).as('stores');

    cy.intercept('GET', '**/api/magento/products*', {
      statusCode: 200,
      body: { data: { items: [], total_count: 0 } },
    }).as('products');

    cy.intercept('GET', '**/api/magento/customers*', {
      statusCode: 200,
      body: { data: { items: [], total_count: 0 } },
    }).as('customers');

    cy.intercept('GET', '**/api/magento/orders*', {
      statusCode: 200,
      body: { data: { items: [], total_count: 0 } },
    }).as('orders');

    cy.intercept('POST', '**/api/magento/sync/orders', (req) => {
      expect(req.body).to.include({ dryRun: false, push: true });
      req.reply({
        statusCode: 200,
        body: {
          data: {
            dryRun: false,
            entity: 'orders',
            seen: 10,
            pushed: 8,
            skipped: 2,
            errors: [],
            message: 'Push complete',
          },
        },
      });
    }).as('syncOrdersPush');

    cy.visit('/integrations/magento');
    cy.wait(['@connection', '@downstreamHealth', '@stores']);

    cy.get('[data-testid="magento-sync-push-orders"]').click();
    cy.contains('This will push Magento data into CRM/Billing. Continue?').should('be.visible');
    cy.contains('button', 'Continue').click();

    cy.wait('@syncOrdersPush');
    cy.contains('dryRun: false').should('be.visible');
  });
});
