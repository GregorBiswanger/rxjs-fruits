describe('When Angular starting page is loaded', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('smoke test', () => {
    cy.contains('app-distinct > h3', 'Übung: Distinct');
  });

});
