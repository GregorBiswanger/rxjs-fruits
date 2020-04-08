import { AppPage } from './app.po';

describe('The skip level 9', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/skip');
  });

  it('should failed on wrong solution', () => {
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '❌');
    page.getRecipeItem(2).should('contain.text', '✔');
    page.getRecipeWarning().should('contain.text', '❌');
    page.getNextButton().should('have.attr', 'disabled');
  });

  it('should success on valid solution', () => {
    page.getCodeEditor().type('skip(2)');
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('not.have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '✔');
    page.getRecipeItem(2).should('contain.text', '✔');
    page.getRecipeWarning().should('not.exist');
    page.getNextButton().should('not.have.attr', 'disabled');
  });
});
