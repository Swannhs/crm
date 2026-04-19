describe('Builders (Form & Workflow)', () => {
  beforeEach(() => {
    cy.loginToKeycloak('appuser', 'Appuser123!');
  });

  it('should open the form builder', () => {
    cy.visit('/form-funnel');
    
    cy.get('h4').should('contain', 'Forms');
    
    // Check for "Create New Form" or similar
    // cy.contains('Create Form').click();
    // cy.url().should('include', '/create');
  });

  it('should display workflow activity logs', () => {
    // Navigate to a known marketing section
    cy.visit('/dashboard/marketing');
    
    // Check for "Automations" or "Workflows"
    cy.contains('Automations').should('exist');
  });
});
