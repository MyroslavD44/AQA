class LoginPage {
    visit() {
      cy.visit("https://www.edu.goit.global/account/login");
    }
  
    fillEmail(email) {
      cy.get('#user_email').type(email);
    }
  
    fillPassword(password) {
      cy.get('#user_password').type(password);
    }
  
    clickLoginButton() {
      cy.get('.eckniwg2').click();
    }
  }
  
  export default LoginPage;
  