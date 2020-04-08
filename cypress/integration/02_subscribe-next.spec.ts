import { AppPage } from './app.po';

describe('The subscribe-next level 2', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/subscribe-next');
  });

  it('should failed on wrong solution', () => {
    page.getStartButton().click();
    cy.wait(2500);
    page.getNextButton().should('have.attr', 'disabled');
  });

  it('should success on valid solution', () => {
    page.getCodeEditor().type('toConveyorBelt(fruit)');
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('not.have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', '✔');
    page.getRecipeItem(2).should('contain.text', '✔');
    page.getRecipeItem(3).should('contain.text', '✔');
    page.getRecipeWarning().should('not.exist');

    page.getNextButton().should('not.have.attr', 'disabled');
  });

  it('should show a error info dialog on borad with failed code', () => {
    page.getCodeEditor().type('distinct((f: string) => f.substring(6))');
    page.getStartButton().click();
    cy.wait(2500);

    page.getOutputHint().should('exist');
    page.getNextButton().should('have.attr', 'disabled');
  });
});
