import { DonatorHistoryPage } from './../donator-history/donator-history';
import { Item } from './../../models/item';
import { Items } from './../../providers/providers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-donator-profile',
  templateUrl: 'donator-profile.html'
})
export class DonatorProfilePage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public navParams: NavParams) {
    this.currentItems = this.items.query();
  }

  ionViewDidLoad() {
  }

  openItem(item: Item) {
    this.navCtrl.push(DonatorHistoryPage, {
      item: item
    });
  }

}
