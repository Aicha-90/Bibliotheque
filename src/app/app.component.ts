import { Component, ViewChild } from '@angular/core';
import { Content, MenuController, NavController, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { BookListPage } from '../pages/bookList/bookList';
import { CdListPage } from '../pages/cdList/cdList';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  booksPage:any = BookListPage;
  cdsPage:any=CdListPage;
  tabsPage:any = TabsPage;
  reglagesPage:any=SettingsPage;
  @ViewChild('content') content:NavController;

  constructor(platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page:any){
    this.content.setRoot(page);
    this.menuCtrl.close();
  }
}

