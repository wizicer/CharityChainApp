import { OrgProjectPage } from './../org-project/org-project';
import { Items } from './../../providers/providers';
import { Item } from './../../models/item';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-org-list',
  templateUrl: 'org-list.html'
})
export class OrgListPage {
  currentItems: Item[];

  constructor(public navCtrl: NavController, public items: Items, public navParams: NavParams) {
    this.currentItems = this.items.query().filter((a) => (a as any).isOwned == true);
  }

  ionViewDidLoad() {
  }

  openItem(item: Item) {
    this.navCtrl.push(OrgProjectPage, {
      item: item
    });
  }

}
