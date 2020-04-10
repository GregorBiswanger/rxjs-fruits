import { AppPage } from './app.po';

describe('The zip-concatmap level 15', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/zip-concatmap');
  });

  it('should failed on wrong solution', () => {
    page.getStartButton().click();
    cy.wait(2500);

    page.getNextButton().should('have.attr', 'disabled');
    page.getRecipeWarningIsNoFruitsIncoming().should('exist');
  });

  it('should success on valid solution', () => {
    page.getCodeEditor().type('concatMap(fruit => fruit){uparrow}{home}{del}{del}{del}{del}{del}zip(apples, bananas)');
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('not.have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '✔');
    page.getRecipeItem(2).should('contain.text', '✔');
    page.getRecipeItem(3).should('contain.text', '✔');
    page.getRecipeItem(4).should('contain.text', '✔');
    page.getRecipeWarningIsToMuchFruits().should('not.exist');
    page.getRecipeWarningIsNoFruitsIncoming().should('not.exist');
    page.getNextButton().should('not.have.attr', 'disabled');
  });
});
