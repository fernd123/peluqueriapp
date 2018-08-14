import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Page } from 'ionic-angular/umd/navigation/nav-util';
import { RegisterPage } from '../register/register';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  homePage: Page = HomePage;
  registerPage: Page = RegisterPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  newCustomer(loginForm: NgForm){
    this.navCtrl.push(this.registerPage);
  }

  login(loginForm: NgForm){
    this.navCtrl.push(this.homePage);
  }

}
