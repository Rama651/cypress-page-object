class Login{
    setEmail(Email){
        cy.get('#email').type(Email);
    }

    setPassword(password){
        cy.get('input[name="login[password]"]').type(password)
    }

    clickSubmit(){
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    }

    verifyLogin(){

    }
}
export default Login;