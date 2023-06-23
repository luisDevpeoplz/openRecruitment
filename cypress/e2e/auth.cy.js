describe('Render Login', () => {
  it('should render login form', () => {
    cy.visit('/login')
    cy.get('h1').should('contain', 'Sign in to your account')
  })
})

describe('Render SignUp', () => {
  it('should render signUp form', () => {
    cy.visit('/signup')
    cy.get('h1').should('contain', 'Create a company account')
  })
})

describe('Render Forgot Password', () => {
  it('should render forgot password form', () => {
    cy.visit('/forgot-password')
    cy.get('h1').should('contain', 'Forgot your password?')
  })
})
