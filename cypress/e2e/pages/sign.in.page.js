const signInPagePageLocators = {
    pageTitle: 'h1',
    emailInput: '#email',
    passwordInput: '#password',
    signInButton: '#sign-in',
    error: '#js-login-error',
}

export class SignInPage {

    checkvalidationError(value1, value2, value3) {
        const runout = [value1, value2, value3]
        const regex = new RegExp(`${runout.join('|')}`, 'g')
        cy.contains(regex).then(res => { 'be.visible' })
        return this;
    }

    clickSignInButton() {
        cy.get(signInPagePageLocators.signInButton)
            .then(res => { 'be.visible' })
            .click()
        return this;
    }

    fillPasswordInput(value) {
        cy.get(signInPagePageLocators.passwordInput)
            .click()
            .clear()
            .type(value)
        return this;
    }

    fillEmailInput(value) {
        cy.get(signInPagePageLocators.emailInput)
            .click()
            .clear()
            .type(value)
        return this;
    }

    checkPageContent(value1, value2, value3) {
        const runout = [value1, value2, value3]
        const regex = new RegExp(`${runout.join('|')}`, 'g')
        cy.contains(regex).then(res => { 'be.visible' })
        return this;
    }

    checkUrl(value) {
        cy.url().should('contain', value)
        return this;
    }    

    openPage(url) {
        cy.visit(url)
        return this;
    }


}