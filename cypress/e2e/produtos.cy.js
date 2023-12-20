describe('Loja EBAC', () => {

  beforeEach(() => {
    cy.visit('/produtos/')
  });

  it('Adicionando item ao carrinho com sucesso', () => {
    cy.Produto()
    cy.contains('foi adicionado no seu carrinho').should('be.visible')
    cy.get('.woocommerce-message').should('be.visible')
  })

  it('Verificando mensagem de limite de compra por item', () => {
    cy.Produto()
    cy.get('.input-text').clear().type('100');
    cy.get('.single_add_to_cart_button').click();
    cy.get('.input-text:invalid')
      .invoke('show')
    cy.contains('O valor deve ser menor ou igual a 99')
      .should('be.visible')
  });

  it('Verificando mensagem de erro relativa a não selecionar a cor do item', () => {
    cy.get('.product-block.grid').eq(1).click();
    cy.get('.button-variable-item-XS').click()
    cy.get('.single_add_to_cart_button').click()
    cy.get('.command.command-name-alert').invoke('show');

  });
})  