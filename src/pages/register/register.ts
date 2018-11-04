import { User } from './../../models/user-model';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { UserProvider } from '../../providers/user-p/user-p';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('registerForm') registerForm;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController,
    public userProvider: UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  back() {
    this.navCtrl.pop();
  }

  register() {
    var self = this;
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
    
    this.userProvider.create(user, true).subscribe(function (response) {
      console.log(response);
      let alert = self.alertCtrl.create({
        title: 'Usuario registrado con éxito',
        buttons: ['OK']
      });
      alert.present();
      self.back();
    }, (function (error) { 
      console.log(error);
    }));
  }

}
