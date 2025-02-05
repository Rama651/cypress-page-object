class Search{
    enterInSearch(res){
        cy.get('#search').type(res)
    }

    clickSearch(){
       cy.get('button[title="Search"]').click()
    }
}

export default Search