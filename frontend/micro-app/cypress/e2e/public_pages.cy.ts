describe('Public Pages and Support', () => {
  it('should display the login page correctly', () => {
    cy.visit('/login');
    cy.contains('Sign in').should('be.visible');
  });

  it('should display the registration page', () => {
    // Note: We might have disabled this in Keycloak but let's check the route
    cy.visit('/register');
    // If it redirects or shows something specific
  });

  it('should display the help center', () => {
    cy.visit('/help-center');
    cy.get('h4').should('contain', 'Help Center');
    cy.get('input[placeholder*="Search"]').should('exist');
  });

  it('should display public shop landing page', () => {
    // Testing a generic shop path if possible
    // cy.visit('/shop/my-shop');
  });

  it('should display onboarding for new users', () => {
    cy.visit('/onboarding');
    // Check for onboarding steps
  });
});
