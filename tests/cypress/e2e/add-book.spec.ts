describe(
  'Add book via API',
  {
    taskTimeout: 5000,
  },
  () => {
    let bookId: any;

    before(() => {
      cy.task('addBook', {title: 'my-book', isbn: 'asdfsdf'}).then(
        _bookId => (bookId = _bookId)
      );
    });

    it('Add book via API', () => {
      cy.visit('/');
      cy.get('h2').contains('my-book').shouldBeVisible();

      // create something with API
      cy.get('[data-cy="i"]').contains(bookId).shouldBeVisible();
    });
  }
);
