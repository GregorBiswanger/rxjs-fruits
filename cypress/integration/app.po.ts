export class AppPage {
  navigateTo(urlPath: string) {
    return cy.visit(urlPath);
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

  getRecipeWarningIsTooMuchFruits() {
    return cy.get('#isTooMuchFruits');
  }

  getRecipeWarningIsNoFruitsIncoming() {
    return cy.get('#isNoFruitsIncoming');
  }

  getRecipeWarningIsTooLittleFruits() {
    return cy.get('#isTooLittleFruits');
  }

  getRecipeWarningIsNoActivateSubscribe() {
    return cy.get('#isNoActivateSubscribe');
  }

  getOutputHint() {
    return cy.get('.element--output');
  }

  getCheatingDetectedImage() {
    return cy.get('.element--cheating-detected');
  }
}
