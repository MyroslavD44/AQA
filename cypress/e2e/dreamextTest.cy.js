describe("General page", () => {
    it("First block of tests", () => {
        cy.visit("https://moniheal.com"); // Перехід на сторінку
        
        cy.viewport(1920, 1080);

        cy.title().should("eq", "Портал Телемедицини MyHeal — Запис до Лікаря, Сімейний Лікар, Онлайн Консультації")
       
        cy.get('[data-cy="register-btn-1"]').should("be.visible"); //Перевірка кнопки Зареєструватися
       
        cy.get('.next > .material-icons').scrollIntoView().click(); // Переключення слайдів в боді сайту

        cy.get('#v-pills-0-tab > .functions-nav__inner').scrollIntoView().click(); // Слайд 1

        cy.get('#v-pills-1-tab > .functions-nav__inner').click();  // Слайд 2
        
        cy.get('#v-pills-2-tab > .functions-nav__inner').click(); // Слайд 3
        
        cy.get('#v-pills-3-tab > .functions-nav__inner').click(); // Слайд 4
        
        cy.get('#v-pills-4-tab > .functions-nav__inner').click(); // Слайд 5
        
        cy.get('#v-pills-5-tab > .functions-nav__inner > .functions-nav__name').click(); // Слайд 6

        cy.get('[data-cy="register-btn-3"]')  //Перевірка кнопки Зареєструватися
        .click()
        .should("be.visible"); 

        cy.get('[data-cy="registerRoleModal-patient-btn"]').click(); //Вибір ролі в реєстрації

        cy.get('[data-cy="register-email-input"]').type("990000006").should("have.value", "+380990000006"); // Введення емейлу

        cy.get('[data-cy="register-password-input"]').type("12345678").should("have.value", "12345678"); // Введення паролю

        cy.get('[data-cy="register-agree-checkbox"] > .checkbox > .checkbox__ico').click(); // Чекбокс
        cy.get('[data-cy="register-btn"]').click(); // Кнопка Зарєструватися
        

 
    
    
    })
})