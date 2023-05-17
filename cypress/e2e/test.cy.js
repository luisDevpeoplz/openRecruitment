// This is just for testing purposes.  Please remove this file when you start writing your own tests.

describe('Home', () => {
  it('should render "Work in progress...."', () => {
    cy.visit('/')
    cy.get('p').should('contain', 'Work in progress....')
  })
})
