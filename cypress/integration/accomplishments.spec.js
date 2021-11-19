describe("accomplishments", () => {
    beforeEach(() => {
        cy.visit('/accomplishments')
    })

    //Click the button that says 'Submit Accomplishment', 'Complete the items above to continue' should be visible
    it("Click the button that says 'Submit Accomplishment', 'Complete the items above to continue' should be visible", () => {
        cy.contains('button','Submit Accomplishment').click();
        cy.contains('Complete the items above to continue').should('be.visible');
    })
    //Fill just the placeholder with Title with 'Testing accomplishment', click the 'Submit Accomplishment button', 'Complete the items above to continue' should be visible
    it("Click the button that says 'Submit Accomplishment', 'Complete the items above to continue' should be visible", () => {
        cy.get('[placeholder="Title"]').type('Testing accomplishment');
        cy.contains('button','Submit Accomplishment').click();
        cy.contains('Complete the items above to continue').should('be.visible');
    })
    //Fill the placeholder with Title with 'Testing accomplishment', and 'My accomplishment...' placeholder with 'Tested three pages with cypress', click the 'Submit Accomplishment' button. 'Complete the items above to continue' should be visible
    it("Click the button that says 'Submit Accomplishment', 'Complete the items above to continue' should be visible", () => {
        cy.get('[placeholder="Title"]').type('Testing accomplishment');
        cy.get('[placeholder="My accomplishment..."]').type('Tested three pages with cypress')
        cy.contains('button','Submit Accomplishment').click();
        cy.contains('Complete the items above to continue').should('be.visible');
    })
    //Fill the placeholder with Title with 'Testing accomplishment', and 'My accomplishment...' placeholder with 'Tested three pages with cypress' and check the data-cy=accomplishment-checkbox, click the 'Submit Accomplishment' button, 'This Accomplisment was Successfully Submitted' should be visible
    it("Click the button that says 'Submit Accomplishment', 'Complete the items above to continue' should be visible", () => {
        cy.get('[placeholder="Title"]').type('Testing accomplishment');
        cy.get('[placeholder="My accomplishment..."]').type('Tested three pages with cypress')
        cy.getByTestId('accomplishment-checkbox').check();
        cy.contains('button','Submit Accomplishment').click();
        cy.contains('This Accomplisment was Successfully Submitted').should('be.visible');
    })
    //Fill the placeholder with Title with 'Testing accomplishment', and 'My accomplishment...' placeholder with 'Tested three pages with cypress' and check the data-cy=accomplishment-checkbox, click the 'Submit Accomplishment' button, click the 'Go Back' button and the values of Title placeholder, My Accomplishment... placeholder should be '' and data-cy=accomplishment-checkbox should be unchecked
    it("Click the button that says 'Submit Accomplishment', 'Complete the items above to continue' should be visible", () => {
        cy.get('[placeholder="Title"]').type('Testing accomplishment');
        cy.get('[placeholder="My accomplishment..."]').type('Tested three pages with cypress')
        cy.getByTestId('accomplishment-checkbox').check();
        cy.contains('button','Submit Accomplishment').click();
        cy.contains('button', 'Go Back').click();
        cy.get('[placeholder="Title"]').should('have.value', '');
        cy.get('[placeholder="My accomplishment..."]').should('have.value', '');
        cy.getByTestId('accomplishment-checkbox').should('not.be.checked');

    })


})