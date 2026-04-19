describe('Settings and Marketing', () => {
  beforeEach(() => {
    cy.loginToKeycloak('appuser', 'Appuser123!');
  });

  it('should display settings tabs', () => {
    cy.visit('/dashboard/settings');
    
    // Check for settings tabs (Account, Security, etc.)
    cy.get('h4').should('contain', 'Settings');
    cy.get('[role="tablist"]').should('exist');
    cy.contains('Account').should('be.visible');
  });

  it('should display marketing overview', () => {
    cy.visit('/dashboard/marketing');
    
    // Check for marketing sections
    cy.get('h4').should('contain', 'Marketing');
    // Check for workflow or campaign tools presence
  });
});
