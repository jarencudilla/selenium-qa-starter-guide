describe('Form Validation', () => {
  beforeEach(() => {
    cy.visit('https://playground.qajourney.net/form/');
  });

  it('Should validate required fields', () => {
    cy.get('form').submit();
    cy.get('.error-message').should('be.visible');
  });

  it('Should accept valid inputs', () => {
    cy.get('#name').type('QA Tester');
    cy.get('#email').type('qa@test.com');
    cy.get('#submit').click();
    cy.get('.success-message').should('contain', 'Form submitted');
  });
});
