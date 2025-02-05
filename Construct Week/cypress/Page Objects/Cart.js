class Cart{
    addToCart(){
        cy.get('#product-addtocart-button').click()
    }
    changeQuantity(num){
        cy.get('#qty').type(num)
    }
    proceedToCheckout(){
        cy.get('#top-cart-btn-checkout').click()
    }
}

export default Cart;