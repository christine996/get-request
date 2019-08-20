import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Result, MyResultObject, Info } from './../../Models/user.interface';
/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
array2:Result;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.array2=this.navParams.get('info')
    console.log(this.array2)
  }

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

}
