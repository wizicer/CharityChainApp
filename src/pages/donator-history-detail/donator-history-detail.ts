import { Item } from './../../models/item';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-donator-history-detail',
  templateUrl: 'donator-history-detail.html'
})
export class DonatorHistoryDetailPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.currentItems = navParams.get('item');
  }

  ionViewDidLoad() {
  }

}
