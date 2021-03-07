import { AppPage } from './app.po';

xdescribe('The fork-join level 17', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/fork-join');
  });

  it('should fail on wrong solution', () => {
    page.getStartButton().click();
    cy.wait(2500);
    page.getNextButton().should('have.attr', 'disabled');
    page.getRecipeWarningIsNoFruitsIncoming().should('exist');
  });

  it('should succeed on valid solution', () => {
    page.getCodeEditor().type('{del}{del}{del}{del}{del}forkJoin(apples, bananas){esc}{end}{del}\n' +
      'concatMap(f => f)');
    page.getStartButton().click();
    cy.wait(2500);

    page.getRecipe().should('not.have.class', 'animated shake');
    page.getRecipeItem(1).should('contain.text', 'Apfel');
    page.getRecipeItem(2).should('contain.text', 'Banane');
    page.getRecipeWarningIsToMuchFruits().should('not.exist');
    page.getRecipeWarningIsNoFruitsIncoming().should('not.exist');
  });
});
