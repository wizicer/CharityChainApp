import { DonationDetailPage } from './../donation-detail/donation-detail';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Items } from '../../providers/providers';
import { Item } from '../../models/item';

@Component({
  selector: 'page-donation-list',
  templateUrl: 'donation-list.html'
})
export class DonationListPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public navParams: NavParams) {
    this.currentItems = this.items.query();
  }

  ionViewDidLoad() {
  }

  openItem(item: Item) {
    this.navCtrl.push(DonationDetailPage, {
      item: item
    });
  }

  gotoTrack() {
    // this.navCtrl.push();
  }
}
