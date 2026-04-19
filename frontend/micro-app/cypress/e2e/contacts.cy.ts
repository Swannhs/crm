describe('Contacts Module', () => {
  beforeEach(() => {
    cy.loginToKeycloak('appuser', 'Appuser123!');
  });

  it('should display contacts list and search', () => {
    cy.visit('/dashboard/contacts');
    
    // Wait for list to load
    cy.get('table').should('exist');
    
    // Check search functionality
    cy.get('input[placeholder*="Search"]').type('Test');
    // Verify results change or wait for API (mock or real)
  });

  it('should open contact create modal/page', () => {
    cy.visit('/dashboard/contacts');
    
    // Click New Contact button
    cy.contains('New Contact').click();
    
    // Verify form or modal
    cy.get('form').should('exist');
    cy.contains('Full Name').should('exist');
  });
});
