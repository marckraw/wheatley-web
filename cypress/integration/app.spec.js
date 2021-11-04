// cypress/integration/app.spec.js

describe('Navigation', () => {
  it('should be able to navigate to page outside of auth', () => {
    // Start from the index page
    cy.visit('http://localhost:3000/not-authorized')

    // The new page should contain an h1 with "About page"
    cy.get('div.not-authorized').contains('Not Authorized')
  })
})