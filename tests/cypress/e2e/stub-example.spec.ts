describe('Stub example', () => {
  it('Stub example', () => {
    cy.intercept({
      method: 'GET',
      url: '**/addUser',
    }).as('addUser');

    cy.visit('https://thinking-tester-contact-list.herokuapp.com/');
    cy.get('button[id="signup"]').shouldBeVisible().click();

    cy.wait('@addUser').then(({response}) => {
      expect(response?.statusCode).to.be.eq(200);
    });
  });
});
