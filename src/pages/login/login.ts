import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Alert, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { Page } from 'ionic-angular/navigation/nav-util';
import { RegisterPage } from '../register/register';
import { LoginProvider } from '../../providers/login/login';
import { EmployeePage } from '../employee/employee';
import { HomePage } from './../home/home';
import { User } from '../../models/user-model';
import { EmployeePProvider } from '../../providers/employee-p/employee-p';

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
    public employePProvider: EmployeePProvider, public alertCtrl: AlertController) {
  }

  ionViewDidEnter() {
    this.employePProvider.userLoged = new User();
    this.loginForm.form.pristine;
    this.loginForm.form.reset();
  }


  register() {
    this.navCtrl.push(this.registerPage);
  }

  login() {
    let email: string = this.loginForm.form.value.email;
    let password: string = this.loginForm.form.value.password;

    this.employePProvider.getUserByEmail(email, password);
    this.employePProvider.userByEmail.forEach(user => {
      for (let i = 0; i < user.length; i++) {
        if (user[i].password == password) {
          this.employePProvider.userLoged = user[i];
          this.navCtrl.push(this.homePage);
        }
      }

      if(this.employePProvider.userLoged.name == undefined){
        let alert = this.alertCtrl.create({
          title: 'Usuario y/o contraseña incorrecto(s)',
          buttons: ['OK']
        });
        alert.present();
      }
      
    });
  }

}
