import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

describe("Другий тест", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  

  it("Відвідування сайту", () => {
    loginPage.visit(); // Перехід на сайт

    loginPage.fillEmail("testowyqa@qa.team"); // Введення емейлу

    loginPage.fillPassword("QA!automation-1"); // Введення паролю

    loginPage.clickLoginButton(); // Натискання на кнопку Log in

    homePage.openNavigationMenu(); // Натискання на кнопку Меню

    homePage.logout(); // Натискання на кнопку Log out
  });


});







        
        
     