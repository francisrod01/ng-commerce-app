/// <reference types="cypress" />
/// <reference path="./index.d.ts" />
// Custom Cypress commands can be added here (left minimal for now)
Cypress.Commands.add('navToHome', (): Cypress.Chainable<Window> => cy.visit('/'));

// App page helper: returns the app title/brand text
Cypress.Commands.add('getTitleText', (): Cypress.Chainable<string> => cy.get('.brand-wrap').invoke('text'));

