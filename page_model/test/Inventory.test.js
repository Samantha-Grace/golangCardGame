import LoginPage from '..pages/LoginPage'
import InventoryPage from '..pages/InventoryPage'

fixture('Login feature testing')
.page`https://www.saucedemo.com/`

test('Add backpack to cart', async t => {
    await t
    .click(LoginPage.addBackpack)
    //await t.expect(InventoryPage.productTitle.innerText).eql('Epic sadface: Username is required')
})

