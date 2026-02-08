/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    /** Navigate to the app root */
    navToHome(): Chainable<Window>;

    /** Returns the text of the app title/brand element */
    getTitleText(): Chainable<string>;
  }
}

export {};