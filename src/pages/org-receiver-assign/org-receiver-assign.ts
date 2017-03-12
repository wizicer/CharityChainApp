import { Camera } from 'ionic-native';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-org-receiver-assign',
  templateUrl: 'org-receiver-assign.html'
})
export class OrgReceiverAssignPage {

  @ViewChild('fileInput') fileInput;

  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(public navCtrl: NavController, navParams: NavParams, public viewCtrl: ViewController, formBuilder: FormBuilder) {
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
  }

}
