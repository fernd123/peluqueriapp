import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Page } from 'ionic-angular/navigation/nav-util';
import { RegisterPage } from '../register/register';
import { EmployeePage } from '../employee/employee';
import { HomePage } from './../home/home';
import { User } from '../../models/user-model';
import { UserProvider } from './../../providers/user-p/user-p';
import { environment } from '../../environments/enviroment';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  homePage: Page = HomePage;
  registerPage: Page = RegisterPage;
  employeeHome: Page = EmployeePage;

  loading: Loading;

  @ViewChild('loginForm') loginForm: NgForm;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userProvider: UserProvider, public alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidEnter() {
    this.loginForm.form.pristine;
    this.loginForm.form.reset();
  }

  register() {
    this.navCtrl.push(this.registerPage);
  }

  login() {
    let email: string = this.loginForm.form.value.email;
    let password: string = this.loginForm.form.value.password;
    var self = this;
    this.showLoading();

    this.userProvider.getUserByEmailAndPassword(email, password)
      .subscribe(cliente => {
        self.loading.dismiss();
        self.userProvider.userLoged = cliente;

        if (this.userProvider.userLoged == undefined) {
          self.userProvider.userLoged = new User();
          let alert = this.alertCtrl.create({
            title: environment.incorrectcredentials,
            buttons: [environment.ok]
          });
          alert.present();
        }else{
          this.navCtrl.push(this.homePage);
        }
      }); 
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: environment.loading
    });
    this.loading.present();
  }

}
