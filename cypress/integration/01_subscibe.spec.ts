import { AppPage } from './app.po';

describe('The subscribe level 1', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/');
  });

  it('should failed on wrong solution', () => {
    page.getStartButton().click();
    page.getNextButton().should('have.attr', 'disabled');
  });

  it('should success on valid solution', () => {
    page.getCodeEditor().type('conveyorBelt.subscribe();');
    page.getStartButton().click();

    page.getNextButton().should('not.have.attr', 'disabled');
  });

});
