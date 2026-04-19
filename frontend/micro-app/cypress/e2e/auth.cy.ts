describe('Authentication Flow', () => {
  it('should redirect to Keycloak and allow login', () => {
    // Visit the app
    cy.visit('/');

    // Check if we are redirected to Keycloak
    cy.url().should('include', ':8080/realms/mymanager');

    // Perform login in Keycloak origin
    cy.origin('http://localhost:8080', () => {
      cy.get('#username').type('appuser');
      cy.get('#password').type('Appuser123!');
      cy.get('#kc-login').click();
    });

    // We should be back at our app and see the dashboard
    cy.url().should('eq', 'http://localhost:3034/');
    cy.get('.logo-text').should('contain', 'MyManager');
  });

  it('should logout correctly', () => {
    // Note: This test assumes we are already logged in from the previous step 
    // or we might need to login again.
    // For simplicity, let's login again.
    cy.visit('/');
    cy.origin('http://localhost:8080', () => {
      cy.get('#username').type('appuser');
      cy.get('#password').type('Appuser123!');
      cy.get('#kc-login').click();
    });

    // Find and click the account/profile icon to reveal logout
    // (Adjust selector based on actual MUI structure)
    cy.get('button[aria-label="My account"]').click();
    cy.contains('Logout').click();

    // Should see the confirmation page
    cy.url().should('include', '/logout-confirm');
    cy.contains('Confirm sign out').should('be.visible');
    cy.get('button#kc-logout').click();

    // Should see the final logout page
    cy.url().should('include', '/logout');
    cy.contains('You are logged out').should('be.visible');
    
    // Clicking sign back in should take us back to Keycloak
    cy.contains('Sign back in').click();
    cy.url().should('include', ':8080/realms/mymanager');
  });
});
