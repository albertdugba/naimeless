/// <reference types="cypress"/>

describe('first', () => {
  it('Should route to the homepage', () => {
    cy.visit('http://localhost:3000')
  })
})
