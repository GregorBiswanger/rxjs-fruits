describe('The map level 4', () => {
  beforeEach(() => {
    cy.visit('/map');
  });

  it('should failed on wrong solution', () => {
    cy.get('#subscribeButton').click();
    cy.wait(2500);

    cy.get('.recipe').should('have.class', 'animated shake');
    cy.get('ol > :nth-child(1)').should('contain.text', '❌');
    cy.get('ol > :nth-child(2)').should('contain.text', '✔');
    cy.get('ol > :nth-child(3)').should('contain.text', '❌');
    cy.get('ol > :nth-child(4)').should('contain.text', '✔');
    cy.get('.recipe > :nth-child(5)').should('not.exist');
    cy.get('#nextButton').should('have.attr', 'disabled');
  });

  it('should success on valid solution', () => {
    cy.get('[style="top:132px;height:22px;"]').type('map(fruit => fruit.replace(\'dirty-\', \'\'))');
    cy.get('#subscribeButton').click();
    cy.wait(2500);

    cy.get('.recipe').should('not.have.class', 'animated shake');
    cy.get('ol > :nth-child(1)').should('contain.text', '✔');
    cy.get('ol > :nth-child(2)').should('contain.text', '✔');
    cy.get('.recipe > :nth-child(4)').should('not.exist');
    cy.get('#nextButton').should('not.have.attr', 'disabled');
  });
});
