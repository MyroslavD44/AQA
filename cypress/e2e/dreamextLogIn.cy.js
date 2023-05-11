describe("Log in", () => {
    it("Log in", () => {
        cy.visit("https://moniheal.com");
        
        cy.get('[data-cy="mainpage-button-login"]').click();

        cy.get('[data-cy="login-email-input"]').type("+380990000006");

        cy.get('[data-cy="login-password-input"]').type("12345678");

        cy.get('[data-cy="login-btn"]').click();

        cy.get('[data-cy="settings-title"]').should("have.text", "Налаштування")
        cy.get('.lazy').click();


    })
})