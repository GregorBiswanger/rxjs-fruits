export class AppPage {
  navigateTo(urlPath: string) {
    return cy.visit(urlPath).wait(500);
  }

  getStartButton() {
    return cy.get('#startButton');
  }

  getNextButton() {
    return cy.get('#nextButton');
  }

  getCodeEditor() {
    return cy.get('.monaco-editor textarea:first');
  }

  getRecipe() {
    return cy.get('.recipe');
  }

  getRecipeItem(positionIndex: number) {
    return cy.get(`ol > :nth-child(${positionIndex})`);
  }

  getRecipeWarning(positionIndex: number = 4) {
    return cy.get(`.recipe > :nth-child(${positionIndex})`);
  }

  getOutputHint() {
    return cy.get('.output');
  }
}
