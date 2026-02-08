/// <reference types="cypress" />

describe('App (smoke)', () => {
  it('shows welcome/brand and reports no console errors', () => {
    cy.visit('/');

    // Spy on console.error to ensure no severe browser errors were logged
    cy.window().then((win) => {
      cy.spy(win.console, 'error').as('consoleError');
    });

    // Check the brand text (matches current app)
    cy.get('.brand-wrap').should('contain.text', 'Angular Store');

    // Assert console.error was not called
    cy.get('@consoleError').should('not.have.been.called');
  });
});
