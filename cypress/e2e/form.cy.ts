describe('Form performance', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[name="name"]').type('First name')
    cy.get('[name="email"]').type('email@example.com')
    cy.get('[name="message"]').type("Lorem ipsum")
    cy.get('[name="terms"]').check()
    cy.get('form').submit()
    cy.get('#toast-container').contains('Success')
  })
})

export {}
