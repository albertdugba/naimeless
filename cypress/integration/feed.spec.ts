/// <reference types="cypress"/>

export {}
describe('Navigate to the feed page', () => {
  it('Should route to the feeds page', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'Logo')
  })

  it('Create a Post', () => {
    cy.visit('/')
    cy.get('input').click()
  })
})
