import { Component } from '@angular/core';
import { BookListPage } from '../bookList/bookList';
import { CdListPage } from '../cdList/cdList';
import { SettingsPage } from '../settings/settings';

@Component({
    selector:'page-tabs',
    templateUrl:'tabs.html'
})


export class TabsPage{

    listeLivres=BookListPage;
    listeCds=CdListPage;
    reglages=SettingsPage;
}