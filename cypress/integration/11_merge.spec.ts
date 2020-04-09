import { AppPage } from './app.po';

describe('The merge level 11', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/merge');
  });

  it('should failed on wrong solution', () => {
    page.getStartButton().click();
    cy.wait(2500);

    page.getNextButton().should('have.attr', 'disabled');
  });

  it('should success on valid solution', () => {
    page.getCodeEditor().type(`merge(apples, bananas).pipe(
      filter(fruit => !fruit.includes('old-'))
    ).subscribe(toConveyorBelt);{del}{del}`);
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('not.have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '✔');
    page.getRecipeItem(2).should('contain.text', '✔');
    page.getRecipeItem(3).should('contain.text', '✔');
    page.getRecipeItem(4).should('contain.text', '✔');
    page.getRecipeItem(5).should('contain.text', '✔');
    page.getRecipeItem(6).should('contain.text', '✔');
    page.getRecipeWarning().should('not.exist');
    page.getNextButton().should('not.have.attr', 'disabled');
  });
});
