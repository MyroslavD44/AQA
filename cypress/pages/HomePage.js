class HomePage {
    openNavigationMenu() {
      cy.get('#open-navigation-menu-mobile').click();
    }
  
    logout() {
        cy.contains("Log out").click();
    }
  }
  
  export default HomePage;
  
