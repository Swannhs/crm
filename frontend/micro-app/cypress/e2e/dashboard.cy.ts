describe('Dashboard Overview', () => {
  beforeEach(() => {
    // Custom command to login
    cy.loginToKeycloak('appuser', 'Appuser123!');
  });

  it('should display the overview page with charts and stats', () => {
    cy.visit('/dashboard/overview');
    
    // Check for header
    cy.get('h4').should('contain', 'Hi, Welcome back');
    
    // Check for some dashboard widgets (common MUI components in Minimals)
    cy.get('.apexcharts-canvas').should('exist');
    
    // Check for specific summary cards if they exist
    // (Adjusting based on common Minimals dashboard structure)
    cy.contains('Total').should('be.visible');
  });

  it('should navigate to contacts page from sidebar', () => {
    cy.visit('/dashboard/overview');
    
    // Find and click Contacts in sidebar
    cy.get('nav').contains('Contacts').click();
    
    // Verify URL change
    cy.url().should('include', '/dashboard/contacts');
    cy.get('h4').should('contain', 'Contacts');
  });
});
