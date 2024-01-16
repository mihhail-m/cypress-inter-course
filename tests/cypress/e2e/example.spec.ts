describe('Example test', () => {
    it('Example', () => {
      cy.visit('/');
      cy.get('h3').contains('Library').should('be.visible');
    });
});
