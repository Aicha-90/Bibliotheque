import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { Book } from '../../models/Book'
import { BooksService } from '../../services/books.service';
import { LendBookPage } from './lendBook/lendBook';

@Component({
    selector:'page-bookList',
    templateUrl:"bookList.html"
})

export class BookListPage{

    booksList: Book[];

    constructor(private modalCtrl: ModalController,
                private bookService: BooksService,
                private menuCtrl: MenuController){
    }

    ionViewWillEnter(){
        this.booksList=this.bookService.booksList.slice();
    }

    onLoadBook(index: number){
        let modal=this.modalCtrl.create(LendBookPage,{ index: index });
        modal.present();
    }

    onToggleMenu() {
        this.menuCtrl.open();
      }

}