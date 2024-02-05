import { faker } from "@faker-js/faker";
describe('API da loja EBAC', () => {

    it('Deve listar todos os produtos cadastrados', () => {
      cy.request({
        method: 'GET',
        url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
        headers: {
          authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
        }
      }).then((response) => {
        expect(response.status).to.equal(200)
      })
    });
  
    it('Deve casdastrar produtos', () => {
      const couponName = faker.commerce.productName(10)
      cy.request({
        method: 'POST',
        url: 'http://lojaebac.ebaconline.art.br/wp-json/wc/v3/coupons',
        body: {
          "code": couponName,
          "amount": "10",
          "discount_type": "fixed_product",
          "description": "Cupom de desconto de teste"
      },
      headers: {
        authorization: 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'
      }
    }).then((response) => {
      expect(response.status).to.equal(201)
      expect(response.statusText).to.equal('Created')
    })
    });
  
  });