describe('Marketing WebTools', () => {
  beforeEach(() => {
    cy.loginToKeycloak('appuser', 'Appuser123!');
  });

  it('should display social proof tools', () => {
    cy.visit('/social-proof');
    cy.get('h4').should('contain', 'Social Proof');
  });

  it('should display social scheduler', () => {
    cy.visit('/social-scheduler');
    cy.get('h4').should('contain', 'Social Scheduler');
  });

  it('should display reputation management', () => {
    cy.visit('/reputation');
    cy.get('h4').should('contain', 'Reputation');
  });
});
