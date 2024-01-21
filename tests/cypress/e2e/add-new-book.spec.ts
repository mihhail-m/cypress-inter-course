describe('Add new book', () => {
  const gqlUri = 'http://localhost:5050/gql';

  it('Add new book examples', () => {
    cy.interceptGql(gqlUri, ['GetBooks']);
    cy.visit('/');

    cy.wait('@GetBooks').then(interception => {
      const res = interception.response;
      //@ts-ignore
      const getIds = res?.body.data.getBooks.map(book => book.id);
      expect(getIds[0]).to.be.eq('36921472-9c05-4f8e-a595-a8051cbe6d3e');
    });

    cy.get('button').contains('Show add book form').shouldBeVisible().click();

    cy.interceptGql(gqlUri, ['addNewBookAndAuhor', 'AddApplicationEvent']);

    cy.get('input[id="title"]')
      .shouldBeVisible()
      .type('my new book title')
      .should('have.value', 'my new book title');

    cy.get('input[id="isbn"]').shouldBeVisible().type('random-isbn-value-123');

    cy.get('input[id="authorFistName"]').shouldBeVisible().type('Mihhail');

    cy.get('input[id="authorLastName"]').shouldBeVisible().type('Matsiinets');

    cy.get('button').contains('Add book').shouldBeVisible().click();

    cy.wait('@addNewBookAndAuhor').its('response.statusCode').should('eq', 200);
    cy.wait('@AddApplicationEvent')
      .its('response.body.data.addApplicationEvent.name')
      .should('eq', 'create-book');

    cy.get('h4').contains('Book has been submitted').shouldBeVisible();
  });
});
