import { Items } from './../../providers/providers';
import { Item } from './../../models/item';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-org-receiver-list',
  templateUrl: 'org-receiver-list.html'
})
export class OrgReceiverListPage {
  currentItems: Item[] = [];

/*  openItem(item: Item) {
    this.navCtrl.push(DonatorHistoryDetailPage, {
      item: (item as any).list
    });
  }*/

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.currentItems = navParams.get('item') || items.receivers;
  }


}
