import LoginPage from '../page-objects/loginPage'

const loginPage = new LoginPage()

describe('Login - Testes Positivos', () => {
	beforeEach(() => {
        cy.clearCookies()
	    cy.clearLocalStorage()
        cy.window().then((win) => win.sessionStorage.clear())
        cy.intercept('POST', '/auth/token').as('loginRequest')
		cy.visit('/login')
	})


	it('TC-01 - Login com e-mail e senha válidos', () => {
		const email = Cypress.env('validEmail')
		const password = Cypress.env('validPassword')

		loginPage.fillEmail(email) 
		loginPage.fillPassword(password) 


        loginPage.submit()

        cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)

		cy.contains('Calendário dos processos').should('be.visible')
	})

    it('TC-15: Login com e-mail maiúsculo', () => {
		const email = Cypress.env('uppercaseEmail')
		const password = Cypress.env('validPassword')

		loginPage.fillEmail(email)
		loginPage.fillPassword(password)

        loginPage.submit()

        cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)

		cy.contains('Calendário dos processos').should('be.visible')
	})

    it('TC-16: Tecla Enter aciona login', () => {
		const email = Cypress.env('validEmail')
		const password = Cypress.env('validPassword')

		loginPage.fillEmail(email)
		loginPage.fillPassword(password)
            cy.get('[data-test="password"]').type('{enter}')

        

        cy.wait('@loginRequest').its('response.statusCode').should('eq', 200)

		cy.contains('Calendário dos processos').should('be.visible')
	})

})



describe('Login - Testes Negativos', () => {
	beforeEach(() => {
        cy.clearCookies()
	    cy.clearLocalStorage()
        cy.window().then((win) => win.sessionStorage.clear())
        cy.intercept('POST', '/auth/token').as('loginRequest')
		cy.visit('/login')
	})

    it('TC-02 - Login com senha incorreta', () => {
		const email = Cypress.env('validEmail')
		const password = Cypress.env('invalidPassword')

		loginPage.fillEmail(email)
		loginPage.fillPassword(password)

        

        loginPage.submit()

        cy.wait('@loginRequest').its('response.statusCode').should('eq', 401)

		cy.contains('Acesso negado. Verifique as credenciais.').should('be.visible')
	})

    it('TC-03 - Login com Email inexistente', () => {
		const email = Cypress.env('invalidEmail')
		const password = Cypress.env('validPassword')

		loginPage.fillEmail(email)
		loginPage.fillPassword(password)

        cy.intercept('POST', '/auth/token').as('loginRequest')

        loginPage.submit()

        cy.wait('@loginRequest').its('response.statusCode').should('eq', 401)

		cy.contains('Acesso negado. Verifique as credenciais.').should('be.visible')
	})

    it('TC-04 - Login com campos vazios', () => {
		const email = Cypress.env('invalidEmail')
		const password = Cypress.env('validPassword')

        loginPage.submit()

        cy.get('[data-test="username"]')
	        .should('have.css', 'border-color', 'rgb(237, 85, 101)')
	        .and('have.css', 'border-width', '1px')
	        .and('have.css', 'border-style', 'solid')

        cy.get('[data-test="password"]')
	        .should('have.css', 'border-color', 'rgb(237, 85, 101)')
	        .and('have.css', 'border-width', '1px')
	        .and('have.css', 'border-style', 'solid')
	})
    
})


