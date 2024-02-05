describe('Loja EBAC', () => {
  it('Adicionando 03 itens ao carrinho com sucesso', () => {
    
    cy.visit('/produtos/')
    cy.addProduto('Aero Daily Fitness Tee', 'XS', 'Brown')
    cy.visit('/produtos/')
    cy.addProduto('Aether Gym Pant', '33', 'Brown')
    cy.visit('/produtos/')
    cy.addProduto('Ajax Full-Zip Sweatshirt', 'S', 'Blue')

    //Assertion
    cy.visit('/carrinho/')
    cy.get('tr.cart_item').should('have.length', 3)    
  
    
  })
})  