import { OrgReceiverListPage } from './../org-receiver-list/org-receiver-list';
import { Items } from './../../providers/providers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-org-project',
  templateUrl: 'org-project.html'
})
export class OrgProjectPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  assign() {
    this.navCtrl.push(OrgReceiverListPage, 
    {
      "manage": false
    });
  }

  history() {
    // this.navCtrl.push(DonationPayPage);
  }

  manage() {
    this.navCtrl.push(OrgReceiverListPage, 
    {
      "manage": true
    });
  }



}
