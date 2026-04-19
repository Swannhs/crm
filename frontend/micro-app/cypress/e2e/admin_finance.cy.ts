describe('Admin and Finance', () => {
  beforeEach(() => {
    cy.loginToKeycloak('appuser', 'Appuser123!');
  });

  it('should display finance overview and sections', () => {
    cy.visit('/dashboard/finance/overview');
    cy.get('h4').should('contain', 'Finance');
  });

  it('should display employee management', () => {
    cy.visit('/dashboard/employees');
    cy.get('h4').should('contain', 'Employees');
    cy.contains('New Employee').should('exist');
  });

  it('should display organizations list', () => {
    cy.visit('/dashboard/organizations');
    cy.get('h4').should('contain', 'Organizations');
  });

  it('should display admin service fees', () => {
    cy.visit('/dashboard/admin/service-fees');
    cy.contains('Service Fees').should('be.visible');
  });
});
