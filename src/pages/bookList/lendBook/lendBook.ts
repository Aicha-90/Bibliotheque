import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Book } from '../../../models/Book';
import { BooksService } from '../../../services/books.service';

@Component({
    selector:'page-lendBook',
    templateUrl:'lendBook.html'
})
export class LendBookPage{

    index: number;
    book: Book;
  
    constructor(public navParams: NavParams,
                public viewCtrl: ViewController,
                public booksService: BooksService) {
    }
  
    ngOnInit() {
      this.index = this.navParams.get('index');
      this.book = this.booksService.booksList[this.index];
    }
  
    dismissModal() {
      this.viewCtrl.dismiss();
    }
  
    onToggleLend() {
      this.book.isLend = !this.book.isLend;
    }
}