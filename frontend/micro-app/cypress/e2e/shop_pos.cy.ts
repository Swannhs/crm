describe('Shop and POS', () => {
  beforeEach(() => {
    cy.loginToKeycloak('appuser', 'Appuser123!');
  });

  it('should display shop overview', () => {
    cy.visit('/dashboard/shop');
    cy.get('h4').should('contain', 'Shop');
  });

  it('should display products list', () => {
    cy.visit('/dashboard/products');
    cy.get('h4').should('contain', 'Products');
    cy.get('table').should('exist');
  });

  it('should display orders list', () => {
    cy.visit('/dashboard/orders');
    cy.get('h4').should('contain', 'Orders');
  });

  it('should display POS management', () => {
    // Note: POS usually requires a shop ID, we test the general list if available
    cy.visit('/dashboard/pos/tables');
    cy.contains('Tables').should('exist');
  });
});
