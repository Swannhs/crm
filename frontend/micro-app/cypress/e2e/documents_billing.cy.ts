describe('Documents and Billing', () => {
  beforeEach(() => {
    cy.loginToKeycloak('appuser', 'Appuser123!');
  });

  it('should display documents manager', () => {
    cy.visit('/dashboard/documents');
    
    // Check for folder list or file manager UI
    cy.get('h4').should('contain', 'Documents');
    cy.contains('New Folder').should('exist');
  });

  it('should display invoices list', () => {
    cy.visit('/dashboard/billing/invoices');
    
    // Check for invoice table
    cy.get('h4').should('contain', 'Invoices');
    cy.get('table').should('exist');
    
    // Check for "New Invoice" button
    cy.contains('New Invoice').click();
    cy.url().should('include', '/billing/invoices/new');
  });
});
