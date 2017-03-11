import { Items } from './../../providers/providers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-donator-history',
  templateUrl: 'donator-history.html'
})
export class DonatorHistoryPage {
  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatorHistoryPage');
  }

}
