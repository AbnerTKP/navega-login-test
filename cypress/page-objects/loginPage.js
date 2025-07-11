class LoginPage {
    visit() {
        cy.visit(Cypress.env('baseUrl'));
    }

    fillEmail(email) {
        cy.get('[data-test="username"]')
            .type(email);
    }

    fillPassword(password) {
        cy.get('[data-test="password"]')
            .type(password);
    }

    submit() {
        cy.get('[data-test="submit"]')
            .click();
    }
}

export default LoginPage