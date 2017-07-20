import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {$WebSocket} from 'angular2-websocket/angular2-websocket'
import { ToastController } from 'ionic-angular';
import { TranslateService } from "ng2-translate";

@Component({
  selector: 'page-donation-pay',
  templateUrl: 'donation-pay.html'
})
export class DonationPayPage {
  pet: string;
  successMessage: string;

  constructor(translate: TranslateService, public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams) {
    this.pet='bc';
    translate.get(['TRANSACTION_SENT_SUCCESSFULLY']).subscribe(values => {
      this.successMessage = values.TRANSACTION_SENT_SUCCESSFULLY;
    });
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
      message: this.successMessage,
      duration: 3000
    });
    toast.present();
  }
}
