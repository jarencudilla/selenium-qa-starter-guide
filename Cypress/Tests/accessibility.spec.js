import 'cypress-axe';
describe('Accessibility Testing', () => {
  beforeEach(() => {
    cy.visit('https://playground.qajourney.net/basic-ui/');
    cy.injectAxe();
  });

  it('Should check for WCAG compliance', () => {
    cy.checkA11y();
  });
});