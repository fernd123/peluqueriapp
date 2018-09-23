import { User } from './../../models/user-model';
import { EmployeePProvider } from './../../providers/employee-p/employee-p';
import { LoginProvider } from './../../providers/login/login';
import { NgForm } from '@angular/forms';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('registerForm') registerForm;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public employeePProvider: EmployeePProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  back() {
    this.navCtrl.pop();
  }

  register() {
    let user: User = new User();
    user.isActive = true;
    user.isCustomer = true;
    user.isAdmin = false;
    user.isEmployee = false;
    user.name = this.registerForm.value.name;
    user.lastname = this.registerForm.value.lastname;
    user.phone = this.registerForm.value.phone;
    user.password = this.registerForm.value.password;
    user.email = this.registerForm.value.email;
    user.genre = this.registerForm.value.genre;

    this.employeePProvider.addEmployee(user);
    this.back();
  }
}
