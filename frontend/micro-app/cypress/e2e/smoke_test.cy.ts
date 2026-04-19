describe('Smoke Test - Critical Path', () => {
  it('should verify the core application lifecycle', () => {
    // 1. Visit Home (Public)
    cy.visit('/');
    
    // 2. Login
    cy.loginToKeycloak('appuser', 'Appuser123!');
    
    // 3. Verify Dashboard
    cy.url().should('include', '/dashboard');
    cy.get('h4').should('contain', 'Hi, Welcome back');
    
    // 4. Quick check on a few modules
    const modules = ['Contacts', 'Calendar', 'Projects', 'Settings'];
    modules.forEach((module) => {
      cy.get('nav').contains(module).should('be.visible');
    });

    // 5. Logout flow
    cy.get('button[aria-label="My account"]').click();
    cy.contains('Logout').click();
    cy.get('button#kc-logout').click();
    cy.contains('You are logged out').should('be.visible');
  });
});
