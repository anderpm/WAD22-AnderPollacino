/// <reference types = "cypress"/>  


/* Optional Question - solve only one of the two tests */

it('Test 1', () => {
    cy.visit('http://localhost:8080/')
    cy.get('.code').eq(1).click()
    cy.get('#note').eq(0).clear().type('test note')
    cy.get('.update').eq(0).click()
}) 


/* 
it("Test 2 - Testing Update a post request", function() {

}) 
*/