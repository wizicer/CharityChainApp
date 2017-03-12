import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {$WebSocket} from 'angular2-websocket/angular2-websocket'
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-donation-pay',
  templateUrl: 'donation-pay.html'
})
export class DonationPayPage {
  pet: string;

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.pet='bc';
  }

  pay(){
    console.log("pay");
    let host = "ws://cp-web-benjaminzjf-125.mybluemix.net/";
    var ws = new $WebSocket(host);
    let createjson = {
      "type": "create",
      "paper": {
        "ticker": "PPP",
        "par": 100000,
        "qty": 1,
        "discount": 3.25,
        "maturity": 15,
        "owner": [],
        "issuer": "hello",
        "issueDate": "1489288238932"
      },
      "user": "hello"
    };

      ws.send(JSON.stringify(createjson)).subscribe(
          (msg)=> {
              console.log("next", msg.data);
          },
          (msg)=> {
              console.log("error", msg);
          },
          ()=> {
              console.log("complete");
          }
      );
      this.presentToast();
      
    }
    presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Transaction sent successfully',
      duration: 3000
    });
    toast.present();
  }
}
