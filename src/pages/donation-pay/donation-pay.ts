import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-donation-pay',
  templateUrl: 'donation-pay.html'
})
export class DonationPayPage {
  pet: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pet='bc';
  }
}
