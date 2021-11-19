/// <reference types="cypress"/>

describe("locators", () => {

    beforeEach(() => {
        cy.visit("/elements")
    })
    //Get every buttons elemnent
    it("finds all buttons", () => {
        cy.get('button');
    })
    //Get all elements with class 'Element-btn'
    it("Get all elements with class 'Element-btn'", () => {
        cy.get('.Elements-btn')
    })
    //Get all elements with 'btn-with-class'
    it("Get all elements with class 'btn-with-class'", () => {
        cy.get('.btn-with-class')
    })
    //Get button with id 'btn-with-id'
    it("Get button with id 'btn-with-id'", () => {
        cy.get('#btn-with-id')
    })
    //Get button with type 'submit'
    it("Get button with type 'submit'", () => {
        cy.get("[type='submit']")
    })
    //Get button with data-cy 'btn-id-1' 
    it("Get button with data-cy 'btn-id-1'", () => {
        cy.getByTestId("btn-id-1")
    })

    //Get button that contains 'Unique Text' as text
    it("Get button that contains 'Unique Text' as text", () => {
        cy.contains('button', 'Unique Text');
    })
    //Get first button that contains 'Not Unique Text'
    it("Get first button that contains 'Not Unique Text'", () => {
        cy.contains('button', 'Not Unique Text');
    })

    //Get first element of type submit that contains 'Not Unique Text'
    it("Get first element of type submit that contains 'Not Unique Text'", () => {
        cy.contains('[type="submit"]', 'Not Unique Text');
    })
    //Get first element in a span that contains 'Not Unique Text'
    it("Get first element in a span that contains 'Not Unique Text'", () => {
        cy.contains('span', 'Not Unique Text');
    })
    //Get first element in a form that contains 'Not Unique Text'
    it("Get first element in a form that contains 'Not Unique Text'", () => {
        cy.contains('form', 'Not Unique Text');
    })

    //Get all buttons in form with id 'form-1'
    it("Get all buttons in form with id 'form-1'", () => {
        cy.get('#form-1').find('button');
    })
    
    //Get first button in form with id 'form-1'
    it("Get first button in form with id 'form-1'", () => {
        cy.get('#form-1').contains('Button in Form');
    })    

    //Get button with class "btn-2" in 'form-1'
    it("Get button with class 'btn-2' in 'form-1'", () => {
        cy.get('#form-1').find('.btn-2');
    })
})