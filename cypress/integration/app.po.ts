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

  getRecipeWarningIsToMuchFruits() {
    return cy.get('#isToMuchFruits');
  }

  getRecipeWarningIsNoFruitsIncoming() {
    return cy.get('#isNoFruitsIncoming');
  }

  getRecipeWarningIsToLittleFruits() {
    return cy.get('#isToLittleFruits');
  }

  getRecipeWarningIsNoActivateSubscribe() {
    return cy.get('#isNoActivateSubscribe');
  }

  getOutputHint() {
    return cy.get('.output');
  }

  getCheatingDetectedImage() {
    return cy.get('#cheating-detected');
  }
}
