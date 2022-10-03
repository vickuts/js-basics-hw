/// <reference types="cypress"/>

it("HW_1", () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Light Theme"]').click();
    cy.get('[title="Forms"]').click();
    cy.get('[title="Form Layouts"]').click();
    cy.get('[placeholder="Jane Doe"]').type('Test Name');
    cy.get('[placeholder="Email"]').first().type('test1@test.com');
    cy.get('.custom-checkbox').first().click();
    cy.get('button:contains("Submit")').first().click();
    cy.get('#inputEmail1').type('test2@test.com');
    cy.get('#inputPassword2').type('qwerty');
    cy.get('nb-radio:first-of-type').click();
    cy.get('span:contains("Option 1")').click();
    cy.get('button:contains("Sign in")').first().click();
    cy.get('#exampleInputEmail1').type('test3@test.com');
    cy.get('#exampleInputPassword1').type('12345');
    cy.get('span:contains("Check me out")').click();
    cy.get('[status="danger"]').click();
    cy.get('[placeholder="Recipients"]').type('Test Recipients');
    cy.get('[placeholder="Subject"]').type('Test Subject');
    cy.get('[placeholder="Message"]').type('Test Message');
    cy.get('[status="success"]').click();
    cy.get('#inputFirstName').type('Test First Name');
    cy.get('#inputLastName').type('Test Last Name');
    cy.get('#inputEmail').type('test4@test.com');
    cy.get('#inputWebsite').type('Test Website');
    cy.get('.appearance-filled.size-medium.shape-rectangle.status-basic.nb-transition').click();
    cy.get('#inputEmail3').type('test5@test.com');
    cy.get('#inputPassword3').type('1q2w3e');
    cy.get('.form-horizontal.ng-untouched.ng-pristine.ng-valid span[class="custom-checkbox"]').click();
    cy.get('[status="warning"]').click();
})