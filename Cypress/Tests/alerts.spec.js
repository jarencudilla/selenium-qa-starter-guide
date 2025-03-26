describe('Alerts & Popups', () => {
  beforeEach(() => {
    cy.visit('https://playground.qajourney.net/alerts/');
  });

  it('Should handle JS alerts', () => {
    cy.on('window:alert', (text) => {
      expect(text).to.equal('This is an alert');
    });
    cy.get('#alert-button').click();
  });
});
