import { Result, Name } from './../../Models/user.interface';
import { MyResultObject } from './../../models/user.interface';
import { RootObject, Nationality } from './../../Models/user.interface2';

import { RequestType, RequestParams, RequestHelperProvider } from './../../providers/request-helper/request-helper';

import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users_results: Result[];
  users_temp: Result[];
  users_nat: Nationality[];
  title: string;
  inputValue: any;
  clicked: boolean;
  Gender_value: string;
  NAT: string;
  new: Result[];
  new_var: string;

  // users: { name: string, age: number, email?: string, active: boolean }[];


  requestParams: RequestParams[] = [];
  count: number = 1;

  myArr: { label: string, active: boolean }[] = [];

  activeClass: string = 'active';
  constructor(public navCtrl: NavController,

    private event: Events,
    private request: RequestHelperProvider, ) {
    this.event.subscribe('aaaa', (val) => {
      console.log('my val is ' + val);
    });
    this.renderNationalities();



  }




  callAPI() {
    this.clicked = true;
    this.requestParams = [{ label: 'results', value: this.inputValue }];
    this.request.sendRequest(RequestType.GET, 'https://randomuser.me/api/', this.requestParams).subscribe((successResponse: MyResultObject) => {
      this.users_results = successResponse.results;
      console.log("TCL: HomePage -> callAPI -> this.users_results", this.users_results)
      this.users_temp = this.users_results;

    }, (error) => {
      console.log(error);

    }, () => {
      console.log("done");
      this.clicked = false;
    });



  }

  ionViewDidLoad() {

  }

  renderNationalities() {
    this.request.sendRequest(RequestType.GET, 'http://www.mocky.io/v2/5d5bedeb3200006600628c11?mocky-delay=1500ms').subscribe((successResponse: RootObject) => {
      this.users_nat = successResponse.nationalities;
      console.log("TCL: HomePage -> callAPI -> this.users_results", this.users_nat)


    }, (error) => {
      console.log(error);

    }, () => {
      console.log("done");
      this.clicked = false;
    });
  }



  // CALLNAT() {
  //   this.clicked = true;

  //   this.request.sendRequest(RequestType.GET, ' http://www.mocky.io/v2/5d5bc81e3200005200628ae0?mocky-delay=1500ms').subscribe((successResponse: MyResultObject) => {
  //     this.users_results = successResponse.results;
  //     console.log("TCL: HomePage -> callAPI -> this.users_results", this.users_results)
  //     this.users_temp = this.users_results;

  //   }, (error) => {
  //     console.log(error);

  //   }, () => {
  //     console.log("done");
  //     this.clicked = false;
  //   });

  // }



  nav(array: Result) {

    this.navCtrl.push('SecondPage', { info: array })
  }

  filter() {
    this.new = this.users_temp.filter(
      new_var => new_var.gender === this.Gender_value);
    console.log(this.new.length)

    this.users_results = this.new;
  }
  cancelSelection() {
    this.Gender_value = '';
  }

}
