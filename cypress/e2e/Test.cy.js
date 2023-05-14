describe("Log i", () => {
    it("Log i", () => {
        cy.visit("https://moniheal.com");
        
        cy.get('.footer-main__block--first > .common_list > :nth-child(3) > .common_list-link').scrollIntoView().click();
        
        cy.go("back");


   
   
    })
})