Cypress.Commands.add("login", (login, password) => {
    cy.get("#user_email").type(login);
    cy.get("#user_password").type(password);
  });