import { Selector } from 'testcafe'

class MyNotesPagePage {
    constructor(){
        this.pageTitle = Selector('#my-notes-page h2')
        this.addNoteItemButton = Selector('btn.btn-primary')
        this.noteItem = Selector('.list-group-item')
    }
}

export default new MyNotesPage()