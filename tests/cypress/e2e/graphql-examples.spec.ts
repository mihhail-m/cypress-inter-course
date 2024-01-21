describe('GQL examples', () => {
  it('GQL examples', () => {
    cy.interceptGql('http://localhost:5050/gql', ['GetBooks']);
    cy.visit('/');

    cy.wait('@GetBooks').then(interception => {
      const res = interception.response;
      //@ts-ignore
      const getIds = res?.body.data.getBooks.map(book => book.id);
      expect(getIds[0]).to.be.eq('36921472-9c05-4f8e-a595-a8051cbe6d3e');
    });

    cy.get('p[data-cy="id"]')
      .contains('36921472-9c05-4f8e-a595-a8051cbe6d3e')
      .shouldBeVisible();
    cy.pause();
  });
});
