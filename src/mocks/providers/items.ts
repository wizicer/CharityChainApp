import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor(public http: Http) {
    let items = [
      {
         "name": "Give Clean Water",
         "profilePic": "assets/img/projects/water.jpg",
         "about": "1 in 10 people lack access to clean water. We’re on a mission to change that. Here’s how.",
         "count": 80000
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

     for(let item of items) {
       this.items.push(new Item(item));
     }
  }

  query(params?: any) {
    if(!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for(let key in params) {
        let field = item[key];
        if(typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if(field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
