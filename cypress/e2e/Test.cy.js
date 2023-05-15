describe("Log in", () => {
    it("Log in", () => {
        cy.visit("https://moniheal.com"); // Перехід на сайт
        
        cy.viewport(1920, 1080)   

        cy.get(':nth-child(1) > .news-nav__link')  // Кнопка Знайти лікаря
        .wait(1000)
        .click()

        cy.get("#name")   // Find a doctor
        .type("Пришко")

        cy.get('.find-filter__button > .button')
        .click() // Prushko

        cy.get('[data-id="6"] > .expert-preview__hide > .expert-preview__hide-footer > .button_medium')
        .click()

        cy.get('[data-title="Консультація для Пацієнтів"] > .btn-wrap > .button_regular')
        .click()




   
   
    })
})