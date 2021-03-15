import { Selector } from 'testcafe'

class InventoryPage {
    constructor(){
        this.productTitle = Selector('#inventory_filter_container')
        this.menuButton = Selector('#react-burger-menu-btn')
        this.logoutButton = Selector('#logout_sidebar_link')
        this.shoppingCartButton = Selector('.shopping_cart_link')
        //this.addBackpack = Selector('.inventory_item').eql('Sauce Labs Backpack')
        this.addBackpack = Selector('.inventory_item')
        this.addBikeLight = Selector('')
        this.addBoltShirt = Selector('')
        this.addFleeceJacket = Selector('')
        this.addOnesie = Selector('')
        this.addRedShirt = Selector('')
        
    }
}

export default new InventoryPage()

