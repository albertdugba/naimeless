/// <reference types="cypress"/>
export {}
describe('first', () => {
  it('Should route to the homepage', () => {
    cy.visit('http://localhost:3000')
  })
})
