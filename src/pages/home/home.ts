import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BookListPage } from '../bookList/bookList';
import { CdListPage } from '../cdList/cdList';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  onGoToBookList(){
    this.navCtrl.push(BookListPage);
  }
  onGoToCdList(){
    this.navCtrl.push(CdListPage);
  }

}
