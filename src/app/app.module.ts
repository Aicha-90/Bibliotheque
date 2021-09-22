import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BookListPage } from '../pages/bookList/bookList';
import { CdListPage } from '../pages/cdList/cdList';
import { SettingsPage } from '../pages/settings/settings';
import { BooksService } from '../services/books.service';
import { CdsService } from '../services/cds.service';
import { LendBookPage } from '../pages/bookList/lendBook/lendBook';
import { LendCdPage } from '../pages/cdList/lendCd/lendCd';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    BookListPage,
    CdListPage,
    SettingsPage,
    LendBookPage,
    LendCdPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    BookListPage,
    CdListPage,
    SettingsPage,
    LendBookPage,
    LendCdPage
  ],
  providers: [
    BooksService,
    CdsService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
