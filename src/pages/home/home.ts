import { Result, MyResultObject, Login } from './../../models/user.interface';


import { RequestType, RequestParams, RequestHelperProvider } from './../../providers/request-helper/request-helper';

import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users_results: Result[];
  title: string;
  inputValue:any;

  Gender_value:any;
 
  users: { name: string, age: number, email?: string, active: boolean }[];

  
  requestParams: RequestParams[] = [];
  count: number = 1;

  myArr: { label: string, active: boolean }[] = [];
 
  activeClass: string = 'active';
  constructor(public navCtrl: NavController,
    private formBuilder: FormBuilder,
    private event: Events,
   private request: RequestHelperProvider) {
    this.event.subscribe('aaaa', (val) => {
      console.log('my val is ' + val);
    })
    

   
  }


 
  
  callAPI() {
    
    this.requestParams = [{ label: 'results', value: this.inputValue },
    { label: 'gender', value: this.Gender_value }];
    this.request.sendRequest(RequestType.GET, 'https://randomuser.me/api/', this.requestParams).subscribe((successResponse: MyResultObject) => {
      this.users_results = successResponse.results;
      console.log("TCL: HomePage -> callAPI -> this.users_results", this.users_results)

    }, (error) => {
      console.log(error);
      
    }, () => {
      console.log("t6");
    });

  }

  

  

  

}
