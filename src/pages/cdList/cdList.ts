import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { Cd } from '../../models/Cd';
import { CdsService } from '../../services/cds.service';
import { LendCdPage } from './lendCd/lendCd';

@Component({
    selector:'page-cdList',
    templateUrl:"cdList.html"
})

export class CdListPage{

    cdsList: Cd[];

    constructor(private modalCtrl: ModalController,
                private cdService: CdsService,
                private menuCtrl: MenuController){
    }

    ionViewWillEnter(){
        this.cdsList=this.cdService.cdsList.slice();
    }

    onLoadCd(index: number){
        let modal=this.modalCtrl.create(LendCdPage,{ index: index });
        modal.present();
    }
    
    onToggleMenu() {
        this.menuCtrl.open();
      }

}