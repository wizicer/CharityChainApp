import { OrgReceiverAssignPage } from './../org-receiver-assign/org-receiver-assign';
import { Items } from './../../providers/providers';
import { Item } from './../../models/item';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-org-receiver-list',
  templateUrl: 'org-receiver-list.html'
})
export class OrgReceiverListPage {
  currentItems : Item[] = [];
  isManage : boolean = false;

  openItem(item : Item) {
    if (this.isManage) {} else {
      this
        .navCtrl
        .push(OrgReceiverAssignPage, {item: item});
    }
  }

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.currentItems = navParams.get('item') || items.receivers;
    this.isManage = navParams.get('manage') || false;
  }


}
