import {faker} from '@faker-js/faker'
const credencial = {
    email: faker.internet.email(),
    senha: faker.internet.password()
}
describe('Login', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
    });

    it('Realizando login com credenciais', () => {
        cy.get('#reg_email').type(credencial.email)
        cy.get('#reg_password').type(credencial.senha)
        cy.get('input[value="Register"]').click();
        cy.get('.page-title').should('be.visible')
        cy.get('.woocommerce-MyAccount-content').should('be.visible')
    });

    it('Realizando login com credenciais inválidas', () => {
        cy.get('#reg_email').type('xxx')
        cy.get('#reg_password').type(credencial.senha)
        cy.get('input[value="Register"]').click()
        cy.get('.input-text:invalid').should('be.visible')
        
    });

    it('Realizando login com preencher os campos obrigatórios', () => {
        cy.get('#reg_email').type(' ')
        cy.get('#reg_password').type(' ')
        cy.get('input[value="Register"]').click()
        cy.get('.woocommerce-error').should('be.visible')
        cy.contains('Erro: Informe um endereço de e-mail válido.').should('be.visible')
            });
});