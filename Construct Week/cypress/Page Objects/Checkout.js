class Checkout{
    placeOrder(){
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()
    }
}
export default Checkout