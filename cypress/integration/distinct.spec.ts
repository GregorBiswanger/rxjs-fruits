describe('The distinct level 1', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should failed on wrong solution', () => {
    cy.get('#subscribeButton').click();
    cy.wait(2500);

    cy.get('.recipe').should('have.class', 'animated shake');
    cy.get('ol > :nth-child(1)').should('contain.text', '✔');
    cy.get('ol > :nth-child(2)').should('contain.text', '❌');
    cy.get('.recipe > :nth-child(4)').should('contain.text', '❌');
    cy.get('#nextButton').should('have.attr', 'disabled');
  });

  it('should success on valid solution', () => {
    cy.get('[style="top:132px;height:22px;"]').type('distinct()');
    cy.get('#subscribeButton').click();
    cy.wait(2500);

    cy.get('.recipe').should('not.have.class', 'animated shake');
    cy.get('ol > :nth-child(1)').should('contain.text', '✔');
    cy.get('ol > :nth-child(2)').should('contain.text', '✔');
    cy.get('.recipe > :nth-child(4)').should('not.exist');
    cy.get('#nextButton').should('not.have.attr', 'disabled');
  });

  it('should show a error info dialog on borad with failed code', () => {
    cy.get('[style="top:132px;height:22px;"]').type('distinct((f: string) => f.substring(6))');
    cy.get('#subscribeButton').click();
    cy.wait(2500);

    cy.get('.output').should('exist');
    cy.get('#nextButton').should('have.attr', 'disabled');
  });
});
