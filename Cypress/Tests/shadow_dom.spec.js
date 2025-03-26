describe('Shadow DOM Testing', () => {
  beforeEach(() => {
    cy.visit('https://playground.qajourney.net/dynamic-dom/');
  });

  it('Should interact with shadow elements', () => {
    cy.get('custom-element').shadow().find('.button').click();
    cy.get('.result').should('contain', 'Clicked');
  });
});