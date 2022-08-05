/// <reference types="cypress"/>

export {}
describe('Feeds Page', () => {
  it('Should route to the feeds page', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'Logo')
  })

  it('Should create post modal onClick', () => {
    cy.visit('/')
    cy.get('input').click()
    cy.get('form')
      .should('exist')
      .findByRole('button')
      .findByTestId('channel')
      .click()
  })

  it('Should find and select a channel', () => {
    cy.get('.Content__ModalContent-sc-1owb0u6-0 > ul > :nth-child(2)').click()
  })
})
