describe('Home', () => {
  it('should load the page', () => {
    cy.visit('/');
  });
  it('should load the page in english', () => {
    cy.visit('/');
    cy.get('header').should('contain', 'Chosen Language: en');
  });
  it('should load the page in wrong language', () => {
    cy.visit('/pt');
    cy.get('header').should('not.contain', 'Chosen Language: en');
  });
});