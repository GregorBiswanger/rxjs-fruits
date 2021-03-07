import { AppPage } from './app.po';

describe('The filter level 5', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/filter');
  });

  it('should fail on wrong solution', () => {
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '✔');
    page.getRecipeItem(2).should('contain.text', '✔');
    page.getRecipeItem(3).should('contain.text', '❌');
    page.getRecipeItem(4).should('contain.text', '❌');
    page.getRecipeItem(5).should('contain.text', '❌');
    page.getRecipeItem(6).should('contain.text', '✔');
    page.getRecipeWarningIsToMuchFruits().should('contain.text', '❌');
    page.getNextButton().should('have.attr', 'disabled');
  });

  it('should succeed on valid solution', () => {
    cy.wait(1000);
    page.getCodeEditor().type('filter(fruit => !fruit.startsWith(\'old-\'))');
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('not.have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '✔');
    page.getRecipeItem(2).should('contain.text', '✔');
    page.getRecipeItem(3).should('contain.text', '✔');
    page.getRecipeItem(4).should('contain.text', '✔');
    page.getRecipeItem(5).should('contain.text', '✔');
    page.getRecipeItem(6).should('contain.text', '✔');
    page.getRecipeWarningIsToMuchFruits().should('not.exist');
    page.getNextButton().should('not.have.attr', 'disabled');
  });
});
