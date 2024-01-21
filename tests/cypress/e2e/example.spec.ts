describe('Custom commands example', () => {
  beforeEach(() => {});

  it('Custom commands example', () => {
    cy.visit('/');
    cy.getH3Headers().contains('Library').shouldBeVisible();
  });
});
