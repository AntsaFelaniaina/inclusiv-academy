// const { beforeEach } = require("mocha")
function openURL() {
  cy.visit('http://demo.owasp-juice.shop')
  cy.get('#mat-dialog-0').should('be.visible')
  cy.get('.close-dialog').click()
  cy.get('#mat-dialog-0').should('not.exist')
}

function searchArticle(article) {
  cy.contains('search').click()
    cy.get('#mat-input-0').type(article + '{enter}')
    cy.get('.mat-grid-list').should('have.length',1)
    cy.get('.item-name').should ('contain', article)
}

describe('Navigation', () => {
  beforeEach(() => {
    // Completer ce beforeEach pour faire fonctionner les tests
  })

  it('user should be able to navigate to the contact us page', () => {
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Go to contact us page"]').click()
    cy.url().should('contain', 'contact')
  })

  it('user should be able to navigate to the contact us page', () => {
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Go to about us page"]').click()
    cy.url().should('contain', 'about')
  })

  it('user should be able to navigate to the contact us page', () => {
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Go to photo wall"]').click()
    cy.url().should('contain', 'photo')
  })

  it('user should be able to navigate to the contact us page', () => {
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Open score-board"]').click()
    cy.url().should('contain', 'board')
  })

  it('user should be able to search an article: Banana Juice', () => {
    //appeler la fonction pour chercher Banana Juice
  })

  it('user should be able to search an article: Apple Juice', () => {
        //appeler la fonction pour chercher Apple Juice
  })

})