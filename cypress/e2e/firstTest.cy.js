import LoginPage from '../pages/LoginPage';
import HomePage from '../pages/HomePage';

describe("Перший тест", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();

  

  it("Відвідування сайту", () => {
    loginPage.visit(); // Перехід на сайт

    loginPage.fillEmail("user888@gmail.com"); // Введення емейлу

    loginPage.fillPassword("1234567890"); // Введення паролю

    loginPage.clickLoginButton(); // Натискання на кнопку Log in

    homePage.openNavigationMenu(); // Натискання на кнопку Меню

    homePage.logout(); // Натискання на кнопку Log out
  });


});



  
    
        

        
       

        

       