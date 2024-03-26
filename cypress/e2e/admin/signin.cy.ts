describe('Admin Login', () => {
  it('Admin uses the enable function', () => {
    cy.initialSetup('alice', 50)

    const title = `Testing NavFiber`

    // Open settings modal
    cy.get('div[data-testid="settings-modal"]').should('be.visible').click()

    // Asserting the settings label text
    cy.get('[data-testid="setting-label"]').should('have.text', 'Admin Settings')

    // Efficiently interact with the about title
    cy.get('#cy-about-title-id').should('be.visible').click().type('{selectAll}').type(title)

    // Submit the form
    cy.get('#add-node-submit-cta').click()

    // Wait for a specific action to complete, such as a network call
    cy.intercept('POST', '/api/about*').as('updateAbout')
    cy.wait('@updateAbout')

    // Close modal and assert the title
    cy.get('div[data-testid="close-modal"]').click()
    cy.get('.title').should('have.text', title)
  })
})
