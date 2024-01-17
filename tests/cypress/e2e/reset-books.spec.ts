describe('Reset list of books', () => {

    it('Reset list of books', () => {
        cy.visit('/');

        cy.task('resetBooks')
            .then(() => {
            // executes right after task completion
            cy.get('[data-cy="book-comp"]').should('not.exist');
        }); // 5 seconds

    });
});
