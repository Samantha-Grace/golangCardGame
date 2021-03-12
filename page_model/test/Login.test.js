import WelcomePage from '..pages/WelcomePage'
import LoginPage from '..pages/LoginPage'
import MyNotesPage from '..pages/MyNotesPage'

fixture('Login feature testing')
.page`http://testapp.galenframework.com/`

test('Users can login using valid credentials', async t => {
    await t
    .click(WelcomePage.loginButton)
    .typeText(LogingPage.usernameField, 'testuser@example.com')
    .typeText(Loginpage.passwordField, 'test123')
    .click(LoginPage.loginButton)

    await t.expect(MyNotesPage.pageTitle.exist).ok()
})

//testcafe chrome 'automationworkshop/page_model/test/Login.test.js'