/// <reference types="cypress" />

describe('Home page (smoke)', () => {
  it('shows the brand in header', () => {
    cy.visit('/');
    cy.get('.brand-wrap').should('contain.text', 'Angular Store');
  });
});
