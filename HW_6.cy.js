/// <reference types="cypress"/>

const params = [
    {fullName: ['Test User1', 'Test User2', 'Test User3'],
    email: ['testuser1@gmail.com', 'testuser2@gmail.com', 'testuser3@gmail.com'],
    expected1: ['Test User1', 'Test User2', 'Test User3'],
    expected2: ['testuser1@gmail.com', 'testuser2@gmail.com', 'testuser3@gmail.com']}
]

params.forEach(({fullName, email, expected1, expected2}) => {
    it(`Type ${fullName} to 'Full name' field and ${email} to 'Email' field`, () => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
        cy.get('[alt="Light Theme"]').click();
        cy.get('[title="Forms"]').click();
        cy.get('[title="Form Layouts"]').click();
        cy.get('[placeholder="Jane Doe"]').type(fullName[0]);
        cy.get('[placeholder="Email"]').first().type(email[0]);
        cy.get('.custom-checkbox').first().click();
        cy.get('button:contains("Submit")').first().click();
        cy.get('[placeholder="Jane Doe"]').should('contain.value', expected1[0]);
        cy.get('[placeholder="Email"]').should('contain.value', expected2[0]);
        cy.get('[placeholder="Jane Doe"]').clear().type(fullName[1]);
        cy.get('[placeholder="Email"]').first().clear().type(email[1]);
        cy.get('button:contains("Submit")').first().click();
        cy.get('[placeholder="Jane Doe"]').should('contain.value', expected1[1]);
        cy.get('[placeholder="Email"]').should('contain.value', expected2[1]);
        cy.get('[placeholder="Jane Doe"]').clear().type(fullName[2]);
        cy.get('[placeholder="Email"]').first().clear().type(email[2]);
        cy.get('button:contains("Submit")').first().click();
        cy.get('[placeholder="Jane Doe"]').should('contain.value', expected1[2]);
        cy.get('[placeholder="Email"]').should('contain.value', expected2[2]);
    })
})