import LoginPage from '..pages/LoginPage'
import InventoryPage from '..pages/InventoryPage'

fixture('Login feature testing')
.page`https://www.saucedemo.com/`

test('Test 1: Login with a valid user', async t => {
    await t
    .click(LoginPage.usernameField)
    .typeText(LogingPage.usernameField, 'standard_user')
    .typeText(Loginpage.passwordField, 'secret_sauce')
    .click(LoginPage.loginButton)
    await t.expect(InventoryPage.productTitle.exist).ok()
})

test('Test 2: Login with invalid user', async t => {
    await t
    .click(LoginPage.usernameField)
    .typeText(LogingPage.usernameField, 'locked_out_user')
    .typeText(Loginpage.passwordField, 'secret_sauce')
    .click(LoginPage.loginButton)
    await t.expect(errorMessage).eql('Epic sadface: Sorry, this user has been locked out.')
})

test('Test 3: Logout from produt page', async t => {
    await t
    .click(LoginPage.usernameField)
    .typeText(LogingPage.usernameField, 'standard_user')
    .typeText(Loginpage.passwordField, 'secret_sauce')
    .click(LoginPage.loginButton)
    await t.expect(InventoryPage.productTitle.exist).ok()
    .click(InventoryPage.menuButton)
    .click(logoutButton)
    await t.expect(LoginPage.usernameField.exist).ok()
})

