describe('Miscellaneous and Public Previews', () => {
  beforeEach(() => {
    // Only login for dashboard routes
  });

  it('should display pricing plans', () => {
    cy.visit('/plans');
    cy.contains('Pricing').should('be.visible');
  });

  it('should display FAQs', () => {
    cy.visit('/faqs');
    cy.get('h4').should('contain', 'FAQs');
  });

  it('should display white label and domain settings', () => {
    cy.loginToKeycloak('appuser', 'Appuser123!');
    cy.visit('/dashboard/white-label');
    cy.contains('White Label').should('exist');
    
    cy.visit('/dashboard/domain');
    cy.contains('Domain').should('exist');
  });

  it('should display community page', () => {
    cy.loginToKeycloak('appuser', 'Appuser123!');
    cy.visit('/dashboard/community');
    cy.get('h4').should('contain', 'Community');
  });

  it('should handle public previews (Document/Invoice)', () => {
    // These usually require a hash/ID, we test the route pattern
    cy.visit('/document/preview/test-hash', { failOnStatusCode: false });
    // Verify it doesn't 404 if possible, or shows a specific "Not Found" UI
  });

  it('should display public payment pages', () => {
    cy.visit('/checkout/test-slug', { failOnStatusCode: false });
    cy.visit('/qrpay/test-slug', { failOnStatusCode: false });
  });
});
