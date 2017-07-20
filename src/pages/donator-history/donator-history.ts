import { DonatorHistoryDetailPage } from './../donator-history-detail/donator-history-detail';
import { Item } from './../../models/item';
import { Items } from './../../providers/providers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TranslateService } from "ng2-translate";

@Component({
  selector: 'page-donator-history',
  templateUrl: 'donator-history.html'
})
export class DonatorHistoryPage {
  item: any;
  currentItems: Item[] = [];

  openItem(item: Item) {
    this.navCtrl.push(DonatorHistoryDetailPage, {
      item: (item as any).list
    });
  }

  constructor(translate: TranslateService, public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
    translate.get(['MONEY_HAVE_BEEN_ALL_ASSIGNED', 'HISTORY_DONATED_DESC', 'HISTORY_TRANSFERRED_DESC', 'HISTORY_PROFIT_DESC', 'HISTORY_DONATED', 'HISTORY_TRANSFERRED', 'HISTORY_PROFIT' ]).subscribe(values => {
      let localitems = [
        {
          "project": "Fund 1000 Scholarships in Rural China for a Year",
          "profilePic": "assets/img/projects/ruralschool.jpg",
          "desc": values.MONEY_HAVE_BEEN_ALL_ASSIGNED,
          "money": 2,
          "list": [
            { 
              "icon": "thumbs-up",
              "name": values.HISTORY_DONATED,
              "date": "2017-3-12 11:13:31",
              "transaction": "8627c041-7349-4570-9bc0-db1de9f1ab00",
              "detail": values.HISTORY_DONATED_DESC,
            },
            { 
              "icon": "star",
              "name": values.HISTORY_TRANSFERRED,
              "date": "2017-3-12 11:31:45",
              "transaction": "1851c526-2f35-4556-bd6f-542a742bbd45",
              "detail": values.HISTORY_TRANSFERRED_DESC,
            },
            { 
              "icon": "ribbon",
              "name": values.HISTORY_PROFIT,
              "date": "2017-3-12 11:56:54",
              "transaction": "eeb1a538-b809-471b-a66f-9db0b37526f2",
              "detail": values.HISTORY_PROFIT_DESC,
            }
          ]
        },
        {
          "project": "Fund 1000 Scholarships in Rural China for a Year",
          "profilePic": "assets/img/projects/ruralschool.jpg",
          "desc": values.MONEY_HAVE_BEEN_ALL_ASSIGNED,
          "money": 2
        },
        {
          "project": "Fund 1000 Scholarships in Rural China for a Year",
          "profilePic": "assets/img/projects/ruralschool.jpg",
          "desc": values.MONEY_HAVE_BEEN_ALL_ASSIGNED,
          "money": 2,
        },
      ];
      for(let histitem of localitems) {
        this.currentItems.push(new Item(histitem));
      }
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatorHistoryPage');
  }

}
