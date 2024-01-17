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

// Declaration file
declare global {
  namespace Cypress {
    interface Chainable {
      getBookHeader(): Cypress.Chainable;
      shouldBeVisible(): Cypress.Chainable;
      getH3Headers(): Cypress.Chainable;
      getElementById(selector: string): Cypress.Chainable;
      forceClick(x: number, y: number): void;
    }
  }
}

Cypress.Commands.add('forceClick', { prevSubject: 'optional' }, (subject, x: number, y: number) => {
  if (Cypress.isCy(subject)) {
    if (x && y) {
      return cy.wrap(subject).click(x, y, { force: true });
    } else {
      return cy.wrap(subject).click({ force: true });
    }
  } else {
    return cy.click(x, y, { force: true });
  }
});

Cypress.Commands.add('getBookHeader', () => {
  if (Cypress.isBrowser('chrome')) {
    return cy.get('h3').contains('Books');
  } else{
    return cy.get('h3').contains('Books');
  }
});

Cypress.Commands.add('getH3Headers', () => {
  return cy.get('h3');
});

Cypress.Commands.add('getElementById', (selector: string) => {
  return cy.get(`[id=${selector}]`);
});

Cypress.Commands.add('shouldBeVisible', {prevSubject: 'element'}, (subject) => {
  if (subject) {
    return cy.wrap(subject).should('be.visible');
  } else {
    throw new Error('Element was not provided.')
  }
});
