import { DonatorHistoryDetailPage } from './../donator-history-detail/donator-history-detail';
import { Item } from './../../models/item';
import { Items } from './../../providers/providers';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, navParams: NavParams, items: Items) {
    this.item = navParams.get('item') || items.defaultItem;
    let localitems = [
      {
         "project": "Fund 1000 Scholarships in Rural China for a Year",
         "profilePic": "assets/img/projects/ruralschool.jpg",
         "desc": "Money have been all assigned.",
         "money": 2,
         "list": [
           { 
             "icon": "thumbs-up",
             "name": "Donate",
             "date": "2017-3-12 11:13:31",
             "transaction": "8627c041-7349-4570-9bc0-db1de9f1ab00",
             "detail": "Donate 2 RMB"
           },
           { 
             "icon": "star",
             "name": "Transferred",
             "date": "2017-3-12 11:31:45",
             "transaction": "1851c526-2f35-4556-bd6f-542a742bbd45",
             "detail": "Non-profit organization received"
           },
           { 
             "icon": "ribbon",
             "name": "Profit",
             "date": "2017-3-12 11:56:54",
             "transaction": "eeb1a538-b809-471b-a66f-9db0b37526f2",
             "detail": "Lucy has received this fund"
           }
         ]
      },
      {
         "project": "Education for Blind Chinese Orphans",
         "profilePic": "assets/img/projects/blind.jpg",
         "desc": "Money have been all assigned.",
         "money": 2
      },
      {
         "project": "Give Clean Water",
         "profilePic": "assets/img/projects/water.jpg",
         "desc": "Money have been all assigned.",
         "money": 2,
      },
    ];
    for(let histitem of localitems) {
      this.currentItems.push(new Item(histitem));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatorHistoryPage');
  }

}
