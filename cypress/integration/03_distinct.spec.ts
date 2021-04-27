import { AppPage } from './app.po';

describe('The distinct level 3', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/distinct');
  });

  it('should fail on wrong solution', () => {
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '✔');
    page.getRecipeItem(2).should('contain.text', '❌');
    page.getRecipeWarningIsTooMuchFruits().should('contain.text', '❌');
    page.getNextButton().should('have.attr', 'disabled');
  });

  it('should succeed on valid solution', () => {
    page.getCodeEditor().type('distinct()');
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('not.have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '✔');
    page.getRecipeItem(1).should('contain.text', '✔');
    page.getRecipeWarningIsTooMuchFruits().should('not.exist');
    page.getNextButton().should('not.have.attr', 'disabled');
  });

  it('should show a error info dialog on board with failed code', () => {
    page.getCodeEditor().type('abcdefghijklmnopqrstuvwxyz');
    page.getStartButton().click();
    cy.wait(2500);

    page.getOutputHint().should('exist');
    page.getNextButton().should('have.attr', 'disabled');
  });
});
