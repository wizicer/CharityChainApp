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

  receivers: any = [
    {
      "name": "Student 1",
      "profilePic": "assets/img/receivers/student1.jpg",
      "money": 20,
      "about": "About Student 1",
    },
    {
      "name": "Student 2",
      "profilePic": "assets/img/receivers/student2.jpg",
      "money": 20,
      "about": "About Student 2",
    },
    {
      "name": "Student 3",
      "profilePic": "assets/img/receivers/student3.jpg",
      "money": 20,
      "about": "About Student 3",
    },
  ];

  constructor(public http: Http) {
    let items = [
      {
         "name": "Fund 1000 Scholarships in Rural China for a Year",
         "profilePic": "assets/img/projects/ruralschool.jpg",
         "about": "Some 200 million rural Chinese live below the poverty line by the World Bank definition of $1.25 per day, implying that 40 million school-aged children are at risk of dropping out of school before their high school graduation. In order to combat this huge waste of human capital, the SOAR Foundation, for the past 20 years, has provided 26,600 merit-based scholarships to more than 8,000 impoverished yet gifted students across rural China to finish high school and achieve success thereafter.",
         "isOwned": true,
         "count": 100000
      },
      {
         "name": "Education for Blind Chinese Orphans",
         "profilePic": "assets/img/projects/blind.jpg",
         "about": "According to statistics, China has 20% of the world's blind population. The least fortunate among the blind are the blind orphans. Launched in 2003, Bethel is a not-for-profit organization which focuses on empowering the visually impaired Chinese orphan community by providing foster care, education, therapy, and livelihood opportunities. Bethel's school provides our blind and visually impaired orphans the education necessary so that one day they can lead a fulfilling, independent life.",
         "count": 80000
      },
      {
         "name": "Give Clean Water",
         "profilePic": "assets/img/projects/water.jpg",
         "about": "1 in 10 people lack access to clean water. We’re on a mission to change that. Here’s how.",
         "count": 80000
      },
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
