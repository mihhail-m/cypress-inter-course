describe('Intercept exmaples', () => {
  it('Intercept examples', () => {
    cy.intercept({
      url: '**/api_list',
      method: 'GET',
    }).as('apiList');

    cy.visit('/');
    cy.reload();
    cy.get('li').contains('API Testing').should('exist').click();
    cy.wait('@apiList').its('response.statusCode').should('eq', 200);
    cy.get('h2').contains('APIs List for practice').shouldBeVisible();
  });
});
