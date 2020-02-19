describe('Landing page', function() {

    beforeEach(function () {
        cy.visit('/index.html')
        cy.viewport(1280, 720)
    })

    it('loads the landing page', function() {
        cy.url().should('contain', 'index.html')
        cy.title().should('contain', 'Zero - Personal Banking - Loans - Credit Cards')
    })

    it('can move the carousel to the right', function() {
        cy.get('.right').click()
        cy.get('.active > img').should('have.attr', 'src', '/resources/img/main_carousel_2.jpg')

    })

    it('can move the carousel to the left', function() {
        cy.get('.left').click()
        cy.get('.active > img').should('have.attr', 'src', '/resources/img/main_carousel_3.jpg')

    })

    it('can navigate to online banking information page from the page navigation menu', function() {
        cy.get('#onlineBankingMenu').click()
        cy.get('h1').should('contain', 'Online Banking')
        cy.url().should('contain', 'online-banking.html')
    })

    it('can navigate to online banking information page from feature menu', function() {
        cy.get('#online-banking').click()
        cy.get('h1').should('contain', 'Online Banking')
        cy.url().should('contain', 'online-banking.html')
    })

    it('can navigate to the feedback page from page navigation menu', function() {
        cy.get('#feedback').click()
        cy.get('#feedback-title').should('contain', 'Feedback')
        cy.url().should('contain', 'feedback.html')
    })
})