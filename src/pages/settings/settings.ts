import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { BookListPage } from '../bookList/bookList';
import { CdListPage } from '../cdList/cdList';

@Component({
    selector:'page-settings',
    templateUrl:"settings.html"
})

export class SettingsPage{
    
    bookListPage=BookListPage;
    cdListPage=CdListPage;
    settingsPage=SettingsPage;

    constructor(private menuCtrl: MenuController){

    }
    
    onToggleMenu() {
        this.menuCtrl.open();
    }

}