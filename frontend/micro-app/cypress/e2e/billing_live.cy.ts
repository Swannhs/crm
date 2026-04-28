describe('Billing Live Flows', () => {
  beforeEach(() => {
    cy.loginToKeycloak('appuser', 'Appuser123!');
  });

  it('shows billing list with summary cards and reconciliation panel', () => {
    cy.visit('/dashboard/billing');
    cy.get('h4').contains('Billing');
    cy.contains('Total Revenue').should('exist');
    cy.contains('Paid').should('exist');
    cy.contains('Outstanding').should('exist');
    cy.contains('Reconciliation (Odoo vs Magento)').should('exist');
    cy.get('table').should('exist');
  });

  it('opens invoice action menu from billing list', () => {
    cy.visit('/dashboard/billing');
    cy.get('tbody tr').then(($rows) => {
      if ($rows.length > 0) {
        cy.wrap($rows[0]).find('button').last().click({ force: true });
        cy.contains('View Details').should('exist');
        cy.contains('Edit').should('exist');
        cy.contains('Post Invoice').should('exist');
        cy.contains('Download PDF').should('exist');
      } else {
        cy.contains('No data found').should('exist');
      }
    });
  });
});

