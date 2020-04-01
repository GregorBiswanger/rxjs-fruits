describe('The subscribe level 1', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should failed on wrong solution', () => {
    cy.get('#subscribeButton').click();
    cy.get('#nextButton').should('have.attr', 'disabled');
  });

  it('should success on valid solution', () => {
    cy.get('[style="top:26px;height:26px;"]').type('conveyorBelt.subscribe();');
    cy.get('#subscribeButton').click();

    cy.get('#nextButton').should('not.have.attr', 'disabled');
  });

});
