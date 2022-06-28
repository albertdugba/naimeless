/// <reference types="cypress"/>
export {}
describe('first', () => {
  it('Should route to the posts feed page', () => {
    cy.visit('http://localhost:3000')
  })
})
