import { AppPage } from './app.po';

describe('The skiplast-skip-merge level 14', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/skiplast-skip-merge');
  });

  it('should failed on wrong solution', () => {
    page.getStartButton().click();
    cy.wait(2500);

    page.getNextButton().should('have.attr', 'disabled');
  });

  it('should success on valid solution', () => {
    page.getCodeEditor().type('skipLast(2)');
    page.getCodeEditor().type('{downarrow}{downarrow}{downarrow}{downarrow}skip(2)');
    page.getCodeEditor().type(
      // tslint:disable-next-line: max-line-length
      '{downarrow}{downarrow}{downarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{leftarrow}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}merge(freshApples, freshBananas).{downarrow}'
    );
    page.getCodeEditor().type(`map(fruit => fruit.replace('dirty-', ''))`);
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
