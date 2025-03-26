describe('IFrame Interaction', () => {
  beforeEach(() => {
    cy.visit('https://playground.qajourney.net/iframes/');
  });

  it('Should interact inside an iframe', () => {
    cy.get('iframe').then(($iframe) => {
      const body = $iframe.contents().find('body');
      cy.wrap(body).find('#iframe-button').click();
    });
  });
});