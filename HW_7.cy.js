///<reference types="cypress"/>

before('Open page', () => {
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
    cy.get('[alt="Dark Theme"]').click();
    cy.get('[title="Modal & Overlays"]').click();
    cy.get('[title="Toastr"]').click();
})

const testWithParams = ({args, expected}) =>
function(){
    cy.get('.mat-ripple.position-select', {timeout: 3000}).click();
    cy.get('.option-list').contains(args.position).click();
    cy.get('[name="title"]').clear().type(args.title);
    cy.get('[name="content"]').clear().type(args.content);
    cy.get('.mat-ripple.appearance-outline').eq(2).click();
    cy.get('.option-list').contains(args.type).click();
    cy.get('button').contains('Show toast').click();
    cy.get('[ng-reflect-toast]').then(toast => {
        cy.wrap(toast)
        .find(`g[data-name="${expected.icon}"]`)
        .should('exist');
        cy.wrap(toast)
        .should('contain', expected.title)
        .and('contain', expected.content)
        .and('have.css', 'background-color')
        .and('eq', expected.color);
        cy.get('div[dir="ltr"]')
        .should('have.css', 'justify-content')
        .and('eq', expected.position.justifyContent);
        cy.get('div[dir="ltr"]')
        .should('have.css', 'align-items')
        .and('eq', expected.position.alignItems);
    })

}

it('first', testWithParams({
    args: {
        position: 'top-right',
        title: 'test title for top-right',
        content: 'test content for top-right',
        time: '1000',
        type: 'primary'
    },
    expected: {
        icon: 'email',
        title: 'test title for top-right',
        content: 'test content for top-right',
        color: 'rgb(51, 102, 255)',
        position: {
            justifyContent: 'flex-end',
            alignItems: 'flex-start'
        }
    } 
}));
it('second', testWithParams({
    args: {
        position: 'top-left',
        title: 'test title for top-left',
        content: 'test content for top-left',
        time: '1000',
        type: 'success'
    },
    expected: {
        icon: 'checkmark',
        title: 'test title for top-left',
        content: 'test content for top-left',
        color: 'rgb(0, 214, 143)',
        position: {
            justifyContent: 'flex-start',
            alignItems: 'flex-start'
        }
    } 
}));
it('third', testWithParams({
    args: {
        position: 'bottom-left',
        title: 'test title for bottom-left',
        content: 'test content for bottom-left',
        time: '1000',
        type: 'info'
    },
    expected: {
        icon: 'question-mark',
        title: 'test title for bottom-left',
        content: 'test content for bottom-left',
        color: 'rgb(0, 149, 255)',
        position: {
            justifyContent: 'flex-start',
            alignItems: 'flex-end'
        }
    } 
}));
it('fourth', testWithParams({
    args: {
        position: 'bottom-right',
        title: 'test title for bottom-right',
        content: 'test content for bottom-right',
        time: '1000',
        type: 'warning'
    },
    expected: {
        icon: 'alert-triangle',
        title: 'test title for bottom-right',
        content: 'test content for bottom-right',
        color: 'rgb(255, 170, 0)',
        position: {
            justifyContent: 'flex-end',
            alignItems: 'flex-end'
        }
    }
}));

