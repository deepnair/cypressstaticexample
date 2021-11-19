describe("habits", () => {
    //Go to the habits page before each test
    beforeEach(() => {
        cy.visit('/habits')
    })
    //Click on the Add button, the modal title should be visible
    it("Click on the Add button, the modal title should be visible", () => {
        cy.contains('button', 'Add').click();
        cy.contains('Add a new habit').should('be.visible');
    })
    //Click on the save changes button, no change should happen (that is the modal title should be visible)
    it("Click on the save changes button, no change should happen (that is the modal title should be visible)", () => {
        cy.contains('button', 'Add').click();
        cy.contains('button', 'Save Changes').click();
        cy.contains('Add a new habit').should('be.visible');
    })
    //Click on the close button, the modal title should not be visible
    it("Click on the close button, the modal title should not be visible", () => {
        cy.contains('button', 'Add').click();
        cy.contains('Add a new habit').should('exist');
        cy.contains('button', 'Close').click();
        cy.contains('Add a new habit').should('not.exist');
    })
    //Click on the Add button, type in 'Drink 5 glasses of water', click the 'Save Changes' button, 'Drink 5 glasses of water' should be visible
    it("Click on the Add button, type in 'Drink 5 glasses of water', click the 'Save Changes' button, 'Drink 5 glasses of water' should be visible", () => {
        cy.contains('button', 'Add').click();
        cy.get('[placeholder="Habit"]').type('Drink 5 glasses of water');
        cy.contains('button', 'Save Changes').click();
        cy.contains('Drink 5 glasses of water').should('be.visible');
    })
    //Image with src of '/static/media/close.fa7e5ead.svg' should be visible.
    it("Image with src of '/static/media/close.fa7e5ead.svg' should be visible.", () => {
        cy.contains('button', 'Add').click();
        cy.get('[placeholder="Habit"]').type('Drink 5 glasses of water');
        cy.contains('button', 'Save Changes').click();
        cy.get('[src="/static/media/close.fa7e5ead.svg"]').should('be.visible');
        cy.contains('Drink 5 glasses of water').click();
    })
    //Click on the element with 'Drink 5 glasses of water' img with src of '/static/media/check.9e8832df.svg' should be visible.
    it("Image with src of '/static/media/close.fa7e5ead.svg' should be visible.", () => {
        cy.contains('button', 'Add').click();
        cy.get('[placeholder="Habit"]').type('Drink 5 glasses of water');
        cy.contains('button', 'Save Changes').click();
        cy.contains('Drink 5 glasses of water').click();
        cy.get('[src="/static/media/check.9e8832df.svg"]').should('be.visible');
    })
})