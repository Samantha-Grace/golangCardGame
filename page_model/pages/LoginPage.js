import { Selector } from 'testcafe'

class LoginPage {
    constructor(){
        this.usernameField = Selector('input[name="login.username"]')
        this.passwordField = Selector('input[name="login.password"]')
        this.loginButton = Selector('input[name="btn.btn-primary"]')
        this.errorMessage = Selector('input[name="login-error-message"]')
    }
}

export default new WelcomePage()