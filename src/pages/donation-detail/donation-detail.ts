import { Items } from './../../providers/providers';
import { DonationPayPage } from './../donation-pay/donation-pay';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
@Component({
  selector: 'page-donation-detail',
  templateUrl: 'donation-detail.html'
})
export class DonationDetailPage {

  item: any;

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonationDetailPage');
  }
  donate() {
    this.navCtrl.push(DonationPayPage);
  }


}
