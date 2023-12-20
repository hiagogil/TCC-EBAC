Cypress.Commands.add('Produto',() => {
    cy.get('.product-block.grid').eq(1).click();
    cy.get('.button-variable-item-XS').click()
    cy.get('.button-variable-item-Brown').click()
    cy.get('.single_add_to_cart_button').click()
})