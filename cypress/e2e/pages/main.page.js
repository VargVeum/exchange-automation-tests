const mainPagePageLocators = {
    pageTitle: 'h1',
    signInButton: '.auth__list-item-link--is-home-secondary',
    cookiebamnner: '#cookie-bar-button'

}

export class MainPage {

    approveCookies() {        
        cy.get('body').then(($ele) => {
            if ($ele.find(mainPagePageLocators.cookiebamnner).length > 0) {
                cy.get(mainPagePageLocators.cookiebamnner).click()
            }
        })
        return this;
    }

    clickSignInButton() {
        cy.get(mainPagePageLocators.signInButton)
            .contains(/Вход|Sign In|Oturum Açın/g)
            .then(res => { 'be.visible' })
            .click()
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