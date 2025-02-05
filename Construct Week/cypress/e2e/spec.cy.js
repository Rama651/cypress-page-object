import Login from "../Page Objects/Login.js"
import Search from "../Page Objects/Search.js"
import Cart from "../Page Objects/Cart.js"
import Checkout from "../Page Objects/Checkout.js"

describe('Construct Week', () => {
  it('passes', () => {
    const ln=new Login();
    const se = new Search();
    const ca = new Cart()
    const co = new Checkout()
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > .authorization-link > a').click()
    ln.setEmail("tilakkumar202@gmail.com")
    ln.setPassword("Rama@1997")
    ln.clickSubmit()
    se.enterInSearch('Hero Hoodie')
    se.clickSearch()
    cy.get(':nth-child(1) > .product-item-info > .details > .name > .product-item-link').click()
    cy.get('#option-label-size-143-item-168').click()
    cy.get('#option-label-color-93-item-49').click()
    ca.changeQuantity(3)
    ca.addToCart()
    cy.get('.showcart').click()
    ca.proceedToCheckout()
    cy.get('.button').click()
    co.placeOrder()
    cy.get('.checkout-success > .actions-toolbar > div.primary > .action').click()
  })
})