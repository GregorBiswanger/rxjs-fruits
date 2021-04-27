import { AppPage } from './app.po';

describe('Anti cheating detection', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo('/distinct');
  });

  it('should trigger on writing fruits directly to toConveyorBelt "Apple" ', () => {
    page.getCodeEditor().type(`{downarrow}{downarrow}toConveyorBelt('apple')`);
    page.getCheatingDetectedImage().should('exist');
    page.getStartButton().should('have.attr', 'disabled');
  });

  it('should trigger on writing fruits directly to toConveyorBelt "Banana" ', () => {
    page.getCodeEditor().type(`{downarrow}{downarrow}toConveyorBelt('banana')`);
    page.getCheatingDetectedImage().should('exist');
    page.getStartButton().should('have.attr', 'disabled');
  });

  it('should trigger on writing fruits directly to toConveyorBelt "Cherry" ', () => {
    page.getCodeEditor().type(`{downarrow}{downarrow}toConveyorBelt('cherry')`);
    page.getCheatingDetectedImage().should('exist');
    page.getStartButton().should('have.attr', 'disabled');
  });

  it('should trigger on writing toConveyorBelt more than once', () => {
    page.getCodeEditor().type(`{downarrow}{downarrow}toConveyorBelt() toConveyorBelt()`);
    page.getCheatingDetectedImage().should('exist');
    page.getStartButton().should('have.attr', 'disabled');
  });
});
