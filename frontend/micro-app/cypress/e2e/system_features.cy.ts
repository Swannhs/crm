describe('System Features', () => {
  beforeEach(() => {
    cy.loginToKeycloak('appuser', 'Appuser123!');
  });

  it('should display notifications list', () => {
    cy.visit('/notifications');
    cy.get('h4').should('contain', 'Notifications');
    
    // Check for notification items
    // cy.get('.MuiListItem-root').should('exist');
  });

  it('should display 404 page for non-existent routes', () => {
    cy.visit('/non-existent-page', { failOnStatusCode: false });
    cy.contains('404').should('be.visible');
    cy.contains('Page Not Found').should('be.visible');
  });

  it('should handle unauthorized access by redirecting to login', () => {
    // Manually clear storage to simulate session loss
    cy.clearLocalStorage();
    cy.clearCookies();
    cy.visit('/dashboard/overview');
    
    // Should be redirected to Keycloak
    cy.url().should('include', ':8080/realms/mymanager');
  });
});
