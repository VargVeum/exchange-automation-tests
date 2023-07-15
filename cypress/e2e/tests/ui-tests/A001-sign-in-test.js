import { MainPage } from "../../pages/main.page";
import { SignInPage } from "../../pages/sign.in.page";
import { userData } from "../../../helpers/getMethods";

describe('[A001] Login tests', () => {
    const mainPage = new MainPage();
    const signInPage = new SignInPage();

    it('#positive scenario: Open main page & Login with valid credentials', () => {
        mainPage.openPage(Cypress.env('mainPageUrl'))
            .checkUrl(Cypress.env('mainPageUrl'))
            .approveCookies()
            .checkPageContent('Instantly buy and sell cryptocurrency with low commission',
                'Моментальная покупка и продажа криптовалюты по низкой комиссии',
                'Düşük komisyonlar ile anında kripto para birimini al ve sat')
            .clickSignInButton()            
            
        signInPage.checkUrl(Cypress.env('signInPageUrl'))
            .checkPageContent('Authorization',
                'Авторизация',
                'Yetkilendirme')
            .fillEmailInput(userData.validEmail)
            .fillPasswordInput(userData.validPassword)
            .clickSignInButton()
            .checkUrl(Cypress.env('dashboardPageUrl')) // This test will be failed for demonstrating negative report            
    })
    it('#negative scenario: Open sign in page & Login with invalid credentials', () => {
        signInPage.openPage(Cypress.env('signInPageUrl'))
            .checkUrl(Cypress.env('signInPageUrl'))
            .checkPageContent('Authorization',
                'Авторизация',
                'Yetkilendirme')
            .fillEmailInput(userData.invalidEmail)
            .fillPasswordInput(userData.validPassword)
            .clickSignInButton()
            .checkvalidationError("Invalid email or password. Try clicking 'Forgot Password' if you're having trouble signing in.",
                "Неправильный адрес электронной почты или пароль. Попробуйте нажать «Забыли пароль», если у вас возникли проблемы при входе.",
                "Geçersiz e-posta veya şifre. Oturum açmakta sorun yaşıyorsanız 'Parolamı Unuttum'u tıklamayı deneyin.")
    })
})