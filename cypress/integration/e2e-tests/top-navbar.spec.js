describe('Top navbar', function() {

    beforeEach(function () {
        cy.visit('/index.html')
        cy.viewport(1280, 720)
    })

    it('should display bank logo', function() {
        cy.get('.brand').should('contain', 'Zero Bank')
        cy.get('.brand').should('have.attr', 'href', '/index.html')
    })

    it('loads login page by clicking sign in button', function() {
        cy.get('#signin_button').click()
        cy.title().should('contain', 'Zero - Log in')
        cy.url().should('contain', '/login.html')
        cy.get('h3').should('contain', 'Log in to ZeroBank')
    })

    it('should search for value using searchbox', function() {
        cy.get('#searchTerm').type('bank{enter}')
        cy.get('h2').should('contain', 'Search Results:')
        cy.url().should('contain', 'search.html?searchTerm=bank')
        cy.get('ul>li').eq(2)
        cy.get(':nth-child(4) > :nth-child(1) > a').should('contain', 'Zero - Personal Banking - Loans - Credit Cards')
        cy.get(':nth-child(4) > :nth-child(2) > a').should('contain', 'Zero - Free Access to Online Banking')
    })


})