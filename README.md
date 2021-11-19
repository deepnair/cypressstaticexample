## Cypress testing static example
This is based on a tutorial by Laith Harb called [Cypress (Web Testing Framework) Crash Course - 2021](https://www.youtube.com/watch?v=avb-VDa3ZG4&t=1820s).

### Approach

1. First install cypress by running 

    ```
    npm i cypress --save-dev
    ```
    Cypress is a developer dependency so install it as such.
1. Open it by running
    ```
    npx cypress open
    ```
1. This will create a new cypress folder, and a cypress.json in the root. The cypress folder will have a folder called 'integration'. It contains several examples tests. Create a folder called 'examples' and move the existing tests into it.
1. Then in the cypress.json in the root, write:
    ```
    {
        "baseUrl": "http://localhost:3000",
        "ignoreTestFiles": "**/examples/**"
    }
    ``` 
    This will cause cypress to ignore all the tests that are now in the examples folder. The base url also is set so now when you do cy.visit, you'll only have to put in whatever comes after localhost:3000.
1. Run sure to run npm start or npm run dev as appropriate for your project (for example for create-react-app it will just be npm run start for create-next-app it will be npm run dev).
1. In the integration folder, create a file called locators.spec.js and within it use the appropriate thing to get all button elements on the page in various tests.
    1. cy.get(): Takes in one parameter using selectors just like css. This will return all matching elements.
    1. cy.contains(): Takes in a paramter of parent, and of test inside, or you could just put in text inside.
    1. cy.find(): Takes in a parameter, finds a child element in the parent. Must be chained off of a parent, can't e chained off of cy.
1. Create custom commands for cypress in the commands.js file underthe support folder in cypress. 
    ```
    Cypress.commands.add('getByTestId', (testId) => {   
        cy.get("[data-cy=`testId`]")
    })
1. To make things simpler for each test, be sure to run a beforeEach() function to visit the site.
    ```
    beforeEach(() => {
        cy.visit('/elements')
    })
1. After the locators to do something in the habits and accomplishments use click(), and type().
1. To make assertions use should() chained after the locator. The typical things in should are ('be.visible'), ('exist'), ('not.exist'), ('have.value', 'examplevalue').
