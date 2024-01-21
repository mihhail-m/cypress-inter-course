// describe('Test screenshot', () => {
//     it('Test screenshot', () => {
//         cy.visit('/');
//         cy.get('h3').contains('Books').shouldBeVisible();
//         cy.screenshot();
//     });
// });

describe('Test after spec', () => {
  it('Test after spec', () => {
    cy.visit('/');
    cy.get('h5').contains('Books').shouldBeVisible();
    cy.screenshot();
  });
});
