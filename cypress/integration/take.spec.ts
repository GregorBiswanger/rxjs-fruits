describe('The take level 2', () => {
  beforeEach(() => {
    cy.visit('/take');
  });

  it('should failed on wrong solution', () => {
    cy.get('#subscribeButton').click();
    cy.wait(2500);

    cy.get('.recipe').should('have.class', 'animated shake');
    cy.get('ol > :nth-child(1)').should('contain.text', '✔');
    cy.get('ol > :nth-child(2)').should('contain.text', '✔');
    cy.get('.recipe > :nth-child(4)').should('contain.text', '❌');
    cy.get('#nextButton').should('have.attr', 'disabled');
  });

  it('should success on valid solution', () => {
    cy.get('[style="top:132px;height:22px;"]').type('take(2)');
    cy.get('#subscribeButton').click();
    cy.wait(2500);

    cy.get('.recipe').should('not.have.class', 'animated shake');
    cy.get('ol > :nth-child(1)').should('contain.text', '✔');
    cy.get('ol > :nth-child(2)').should('contain.text', '✔');
    cy.get('.recipe > :nth-child(4)').should('not.exist');
    cy.get('#nextButton').should('not.have.attr', 'disabled');
  });
});
