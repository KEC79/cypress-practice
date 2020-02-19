describe('Application Login', function() {

    beforeEach(function () {
        cy.visit('/login.html')
        cy.viewport(1280, 720)
    })

    it('can login to application with valid credentials', function() {
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('input[type="submit"]').contains('Sign in').click()
        cy.url().should('contain', '/bank/account-summary.html')
        cy.title().should('contain', 'Zero - Account Summary')
    })

    it('cannot login to application with invalid credentials', function() {
        cy.get('#user_login').type('invalid-username')
        cy.get('#user_password').type('invalid-password')
        cy.get('input[type="submit"]').contains('Sign in').click()
        cy.get('h3').should('contain', 'Troubles entering the site?')
        cy.get('.alert-error').should('contain', 'Login and/or password are wrong.')
    })

    it('can request password reset', function() {
        cy.get('a[href="/forgot-password.html"]').click()
        cy.get('h3').should('contain', 'Forgotten Password')
        cy.get('#user_email').type('test@test.com')
        cy.get('input[type="submit"]').contains('Send Password').click()
        cy.get('.offset3').should('contain', 'Your password will be sent to the following email: test@test.com')
    })

    
})