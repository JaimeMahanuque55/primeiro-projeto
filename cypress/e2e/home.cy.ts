describe('Home', () => {
  it('should load the page', () => {
    cy.visit('/');
  });
  it('should load the page in english', () => {
    cy.visit('/');
    cy.get('header').should('contain', 'Choosen Language: en');
  });
  it('should load the page in wrong language', () => {
    cy.visit('/pt');
    cy.get('header').should('not.contain', 'Choosen Language: en');
  });
  it('should load the page in portuguese', () => {
    cy.visit('/pt');
    cy.get('header').should('contain', 'Linguagem Escolhida: pt');
  });
  it('should go to login page', () => {
    cy.visit('/');
    cy.contains('Do Login').click();
    cy.url().should('include', '/api/auth/signin');
  })
});