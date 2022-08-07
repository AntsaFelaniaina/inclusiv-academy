describe('Navigation', () => {
  // Visiter la page http://demo.owasp-juice.shop
  // Vérifier qu'une page de dialog est bien visible
  it('Welcome page should appears on the main pages', () => {
    // Coder ici
  })

  // Visiter la page http://demo.owasp-juice.shop
  // Fermer la page de dialog
  // Vérifier que la page de dialog n'est plus visible
  it('user can dismiss the welcome page', () => {
    // Coder ici
  })

  // Factoriser la navigation dans la page http://demo.owasp-juice.shop
  // et en s'assurant d'avoir bien fermer la page de dialog
  function openURL() {
    // Coder ici
  }

  // Utiliser la fonction precedente pour faire les première opérations de navigation et de cloture de la page de dialog
  // Cliquer sur le bouton de sidebar
  // Aller sur la page "contact us"
  // Vérifier que vous êtes bien sur la bonne page
  it('user should be able to navigate to the contact us page', () => {
    openURL()
    // Coder ici
  })

  // Même chose pour la page "about us"
  it('user should be able to navigate to the about us page', () => {
    openURL()
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Go to about us page"]').click()
    cy.url().should('contain', 'about')
  })

  // Même chose pour la page "photo wall"
  it('user should be able to navigate to the photo wall', () => {
    openURL()
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Go to photo wall"]').click()
    cy.url().should('contain', 'photo')
  })

  // Même chose pour la page "score"
  it('user should be able to navigate to the score', () => {
    openURL()
    cy.get('[aria-label="Open Sidenav"]').click()
    cy.get('[aria-label="Open score-board"]').click()
    cy.url().should('contain', 'board')
  })

  // Rechercher un article dans la bare de recherche
  // Vérifier qu'il y a bien un article dans la liste
  // Vérifier que le nom de l'article apparait bien dans la liste
  it('user should be able to search an article', () => {
    openURL()
    // coder ici
  })
})
