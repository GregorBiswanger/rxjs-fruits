export class AppPage {
  navigateTo(urlPath: string) {
    return cy.visit(urlPath);
  }

  getStartButton() {
    return cy.get('#subscribeButton');
  }

  getNextButton() {
    return cy.get('#nextButton');
  }

  getCodeEditor() {
    return cy.get('.view-lines');
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
