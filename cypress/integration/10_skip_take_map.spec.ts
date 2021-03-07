import { AppPage } from './app.po';

describe('The skip-take-map level 10', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/skip-take-map');
  });

  it('should fail on wrong solution', () => {
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '❌');
    page.getRecipeWarningIsTooMuchFruits().should('contain.text', '❌');
    page.getNextButton().should('have.attr', 'disabled');
  });

  it('should succeed on valid solution', () => {
    page.getCodeEditor().type(`skip(2),
    take(1),
    map(fruit => fruit.replace('dirty-', ''))`);
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('not.have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '✔');
    page.getRecipeWarningIsTooMuchFruits().should('not.exist');
    page.getNextButton().should('not.have.attr', 'disabled');
  });
});
