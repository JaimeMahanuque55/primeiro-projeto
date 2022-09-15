////////////// Usando Hooks de Teste no Cypress 1 ////////////

// describe('Login', () => {
//   // before(() => { // Executa antes de todos testes

//   // });

//   // after(() => {

//   // });
//   beforeEach(() => { // Executa antes de cada teste
//     cy.visit('/api/auth/signin'); // Antes de cada teste ele entra na pagina de login
//   });
//   it('Should enter login page', () => {
//     cy.title().should('contain', 'Sign In');
//   });
//   it('Should get an error on login with wrong credentials', () => {
//     const email = 'wrong@gmail.com';
//     const password = '1234';
//     cy.get('#input-email-for-credentials-provider').type(email); // O type nao e do tipo mas sim de digitar
//     cy.get('#input-password-for-credentials-provider').type(password);
//     cy.contains('Sign in with Credentials').click();
//     cy.contains('Sign in failed');
//     cy.url().should('contain', 'error=CredentialsSignin')
//   })
// });

//////////// Usando Hooks de Teste no Cypress 2 ////////////

describe('Login', () => {
  // before(() => { // Executa antes de todos testes

  // });

  // after(() => {

  // });
  beforeEach(() => { // Executa antes de cada teste
    cy.visit('/api/auth/signin'); // Antes de cada teste ele entra na pagina de login
  });
  it('Should enter login page', () => {
    cy.title().should('contain', 'Sign In');
  });
  it('Should get an error on login with wrong credentials', () => {
    const email = 'wrong@gmail.com';
    const password = '1234';
    cy.get('#input-email-for-credentials-provider').type(email); // O type nao e do tipo mas sim de digitar
    cy.get('#input-password-for-credentials-provider').type(password);
    cy.contains('Sign in with Credentials').click();
    cy.contains('Sign in failed');
    cy.url().should('contain', 'error=CredentialsSignin')
  });
  it('Should do credentials login properly', () => {
    const email = 'ivan@gmail.com';
    const password = '1234';
    cy.get('#input-email-for-credentials-provider').type(email); // O type nao e do tipo mas sim de digitar
    cy.get('#input-password-for-credentials-provider').type(password);
    cy.contains('Sign in with Credentials').click();
    cy.get('button:contains("Logout")').should('exist');
    // cy.get('button').should('have.text', 'Logout');
  });
  it('Should do logout ', () => {
    const email = 'ivan@gmail.com';
    const password = '1234';
    cy.get('#input-email-for-credentials-provider').type(email); // O type nao e do tipo mas sim de digitar
    cy.get('#input-password-for-credentials-provider').type(password);
    cy.contains('Sign in with Credentials').click();
    cy.get('button:contains("Logout")').click();
    cy.get('button:contains("Do Login")').should("exist");
  });
});