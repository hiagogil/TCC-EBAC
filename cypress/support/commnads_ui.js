Cypress.Commands.add('addProduto',(name, tamanho, cor) => {
    cy.contains('.product-block.grid', `${name}`).click();
    cy.get(`.button-variable-item-${tamanho}`).click()
    cy.get(`.button-variable-item-${cor}`).click()
    cy.get('.single_add_to_cart_button').click()
  })