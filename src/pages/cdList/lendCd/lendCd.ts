import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Cd } from '../../../models/Cd';
import { CdsService } from '../../../services/cds.service';

@Component({
    selector:'page-lendCd',
    templateUrl:'lendCd.html'
})
export class LendCdPage{

    index: number;
    cd: Cd;
  
    constructor(public navParams: NavParams,
                public viewCtrl: ViewController,
                public cdsService: CdsService) {
    }
  
    ngOnInit() {
      this.index = this.navParams.get('index');
      this.cd = this.cdsService.cdsList[this.index];
    }
  
    dismissModal() {
      this.viewCtrl.dismiss();
    }
  
    onToggleLend() {
      this.cd.isLend = !this.cd.isLend;
    }
}