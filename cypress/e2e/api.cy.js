describe('API da loja EBAC', () => {
let produto = response.body

    it.only('Cadastrando produtos', () => {
        cy.request({
            method: 'POST',
            url: '/produtos',
            body: {
                "nome": produto,
                "preco": '20.21',
                "descricao": 'descricao',
                "quantidade": 'quantidade'
            },
            }).then((response) => {
            expect(response.status).to.equal(200);
        });
    });

    it.only('Listando produtos utilizando a API', () => {
        cy.request({
            method: 'GET',
            url: '/produtos/'
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(respost.name).to.equal(produto)
        })
    });

    it('Alterando um item utilizando API', () => {
        cy.request({
            method: 'PUT',
            url: '/produtos/',
            bory: {
                "nome": 'produto1',
                "preco": '20.20',
                "descricao": 'descricao',
                "quantidade": 'quantidade'
            }
        })
    });

})