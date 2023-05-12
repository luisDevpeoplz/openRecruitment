// This is just for testing purposes. Please remove this file when you start writing your own tests.

describe('Basic test', () => {
  it('Go to a page and see a text', () => {
    cy.visit('https://www.google.com')
    cy.title().should('include', 'Google')
  })
})
