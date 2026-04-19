// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

declare global {
  namespace Cypress {
    interface Chainable {
      loginToKeycloak(username: string, password: string): Chainable<void>;
    }
  }
}

Cypress.Commands.add('loginToKeycloak', (username, password) => {
  cy.visit('/');
  
  // Wait for redirect to Keycloak
  cy.url().should('include', ':8080/realms/mymanager');

  cy.origin('http://localhost:8080', { args: { username, password } }, ({ username, password }) => {
    cy.get('#username').type(username);
    cy.get('#password').type(password);
    cy.get('#kc-login').click();
  });

  // Verify we are back
  cy.url().should('eq', 'http://localhost:3034/');
});

export {};
