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
         "project": "Give Clean Water",
         "profilePic": "assets/img/projects/water.jpg",
         "desc": "Money have been all assigned.",
         "money": 2,
         "list": [
           { 
             "icon": "thumbs-up",
             "name": "Donate",
             "date": "2017-3-11 11:11:11",
             "transaction": "1111-1111-1111-1111-1111-1111",
             "detail": "Donate 2 RMB"
           },
           { 
             "icon": "star",
             "name": "Received",
             "date": "2017-3-11 11:11:11",
             "transaction": "1111-1111-1111-1111-1111-1111",
             "detail": "Non-profit organization received"
           },
           { 
             "icon": "ribbon",
             "name": "Profit",
             "date": "2017-3-11 11:11:11",
             "transaction": "1111-1111-1111-1111-1111-1111",
             "detail": "Lucy has received this fund"
           }
         ]
      },
      {
         "name": "新学期温暖包",
         "profilePic": "assets/img/speakers/bear.jpg",
         "about": "温暖包，和孩子们一起迎接新学期",
         "count": 80000
      },
      {
         "name": "新学期温暖包",
         "profilePic": "assets/img/speakers/bear.jpg",
         "about": "温暖包，和孩子们一起迎接新学期",
         "count": 80000
      }
    ];
    for(let histitem of localitems) {
      this.currentItems.push(new Item(histitem));
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatorHistoryPage');
  }

}
