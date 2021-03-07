import { AppPage } from './app.po';

describe('The repeat level 16', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/repeat');
  });

  it('should fail on wrong solution', () => {
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('not.have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '✔');
    page.getRecipeItem(2).should('contain.text', '');
    page.getRecipeItem(3).should('contain.text', '');
    page.getRecipeWarningIsTooMuchFruits().should('not.exist');
    page.getRecipeWarningIsTooLittleFruits().should('exist');
    page.getNextButton().should('have.attr', 'disabled');
  });

  it('should succeed on valid solution', () => {
    page.getCodeEditor().type('repeat(3)');
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('not.have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '✔');
    page.getRecipeItem(2).should('contain.text', '✔');
    page.getRecipeItem(3).should('contain.text', '✔');
    page.getRecipeWarningIsTooMuchFruits().should('not.exist');
    page.getRecipeWarningIsTooLittleFruits().should('not.exist');
    page.getNextButton().should('not.have.attr', 'disabled');
  });
});
