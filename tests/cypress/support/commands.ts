// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
export {};

declare global {
  namespace Cypress {
    interface Chainable {
      forceClick(): void;
    }
  }
}

Cypress.Commands.add('forceClick', () => {});
