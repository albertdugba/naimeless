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
    cy.findByTestId('select-options').find('li').first().click()
  })
})

describe('Post', () => {
  it('Create post', () => {
    cy.findByPlaceholderText(/Whats happening ?/i).type(
      'Replay.io is on to the next big thing'
    )
  })

  it('Submit post', () => {
    cy.findByRole('button', { name: /post/i }).click()
  })
})
