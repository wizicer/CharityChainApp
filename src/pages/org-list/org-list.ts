import { Items } from './../../providers/providers';
import { Item } from './../../models/item';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the OrgList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-org-list',
  templateUrl: 'org-list.html'
})
export class OrgListPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public navParams: NavParams) {
    this.currentItems = this.items.query();
  }

  ionViewDidLoad() {
  }

/*  openItem(item: Item) {
    this.navCtrl.push(DonationDetailPage, {
      item: item
    });
  }

  gotoTrack() {
    this.navCtrl.push(DonatorProfilePage);
  }*/

}
