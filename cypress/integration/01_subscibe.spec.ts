import { AppPage } from './app.po';

describe('The subscribe level 1', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/');
  });

  it('should fail on wrong solution', () => {
    page.getStartButton().click();
    page.getNextButton().should('have.attr', 'disabled');
    page.getRecipeWarningIsNoActivateSubscribe().should('exist');
  });

  it('should succeed on valid solution', () => {
    page.getCodeEditor().type('conveyorBelt.subscribe();');
    page.getStartButton().click();

    page.getNextButton().should('not.have.attr', 'disabled');
    page.getRecipeWarningIsNoActivateSubscribe().should('not.exist');
  });

});
