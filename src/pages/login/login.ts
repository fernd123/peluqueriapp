import { HomePage } from './../home/home';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Page } from 'ionic-angular/navigation/nav-util';
import { RegisterPage } from '../register/register';
import { LoginProvider } from '../../providers/login/login';
import { EmployeePage } from '../employee/employee';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  homePage: Page = HomePage;
  registerPage: Page = RegisterPage;
  employeeHome: Page = EmployeePage;

  @ViewChild('loginForm') loginForm: NgForm;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public loginProvider: LoginProvider) {
  }

  ionViewDidEnter() {
    this.loginProvider.user = undefined;
    this.loginForm.form.pristine;
    this.loginForm.form.reset();
  }


  register() {
    this.navCtrl.push(this.registerPage);
  }

  login() {
    let email: String = this.loginForm.form.value.email;
    let password: String = this.loginForm.form.value.password;

    this.loginProvider.login(email, password);
    if (this.loginProvider.user != undefined && this.loginProvider.user != null) {
      this.navCtrl.push(this.homePage);
    }
  }

}
