describe('Broken Links Test', () => {
  it('Should check for 404 errors', () => {
    cy.request({
      url: 'https://playground.qajourney.net/broken-links/',
      failOnStatusCode: false,
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });
});