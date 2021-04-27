import { AppPage } from './app.po';

describe('The merge level 11', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/merge');
  });

  it('should fail on wrong solution', () => {
    page.getStartButton().click();
    cy.wait(2500);

    page.getNextButton().should('have.attr', 'disabled');
    page.getRecipeWarningIsNoFruitsIncoming().should('exist');
  });

  it('should succeed on valid solution', () => {
    page.getCodeEditor().type(`{del}{del}{del}{del}{del}merge(apples, bananas){esc}{downarrow}
      filter(fruit => !fruit.includes('old-'))`, { timeout: 10000 });
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('not.have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '✔');
    page.getRecipeItem(2).should('contain.text', '✔');
    page.getRecipeItem(3).should('contain.text', '✔');
    page.getRecipeItem(4).should('contain.text', '✔');
    page.getRecipeItem(5).should('contain.text', '✔');
    page.getRecipeItem(6).should('contain.text', '✔');
    page.getRecipeWarningIsTooMuchFruits().should('not.exist');
    page.getRecipeWarningIsNoFruitsIncoming().should('not.exist');
    page.getNextButton().should('not.have.attr', 'disabled');
  });
});
