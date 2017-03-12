import { Camera } from 'ionic-native';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {$WebSocket} from 'angular2-websocket/angular2-websocket'
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-org-receiver-assign',
  templateUrl: 'org-receiver-assign.html'
})
export class OrgReceiverAssignPage {

  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, navParams: NavParams, public viewCtrl: ViewController, formBuilder: FormBuilder) {
    this.item = navParams.get('item');

    this.form = formBuilder.group({
      profilePic: [''],
      name: ['', Validators.required],
      about: ['']
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  done() {
    console.log(this.form.value.name);
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
