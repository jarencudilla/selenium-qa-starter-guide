describe('Network Delay Handling', () => {
  beforeEach(() => {
    cy.visit('https://playground.qajourney.net/network-delay/');
  });

  it('Should wait for delayed content', () => {
    cy.intercept('GET', '/api/data', (req) => {
      req.reply((res) => {
        res.delay(3000);
        res.send({ success: true });
      });
    });
    cy.get('#loading').should('be.visible');
    cy.wait(3000);
    cy.get('#loading').should('not.exist');
  });
});