/// <reference types="cypress" />

describe('App (smoke)', () => {
  it('shows welcome/brand and reports no console errors', () => {
    // Attach spy before the app loads so console errors during initial load are captured
    cy.visit('/', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'error').as('consoleError');
      }
    });

    // Check the brand text (matches current app)
    cy.get('.brand-wrap').should('contain.text', 'Angular Store');

    // Assert console.error was not called
    cy.get('@consoleError').should('not.have.been.called');
  });
});
