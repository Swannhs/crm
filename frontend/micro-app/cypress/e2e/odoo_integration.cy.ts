describe('odoo integration page', () => {
  it('renders disconnected state and masks credential inputs', () => {
    cy.visit('/dashboard/integrations/odoo');
    cy.contains('Odoo Integration').should('exist');
    cy.contains('Connection status').should('exist');
    cy.contains('Connected:').should('exist');

    cy.get('input[type="password"]').should('have.length.at.least', 2);
    cy.contains('Dry-run Magento customers -> Odoo').should('exist');
    cy.contains('Dry-run Magento orders -> Odoo').should('exist');
  });
});
