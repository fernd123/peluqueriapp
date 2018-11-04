import { environment } from './../../../environments/enviroment';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { User } from '../../../models/user-model';
import { UserProvider } from './../../../providers/user-p/user-p';


@Component({
  selector: 'page-manageemployee',
  templateUrl: 'manage-employee.html',
})

export class ManageEmployeePage {

  employee: User = new User();
  employeeList: User[] = [];
  title: String;
  action: String;
  save: String = environment.save;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userProvider: UserProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    let employeeSelected = this.userProvider.userSelected;
    if (employeeSelected != undefined && employeeSelected != null) {
      this.title = environment.editEmployeeTitle + ` ${employeeSelected.name} ${employeeSelected.lastname}`;
      this.action = environment.save;
      this.employee = this.userProvider.userSelected;
    } else {
      this.title = environment.newEmployeeTitle;
      this.action = environment.newEmployeeAction;
    }
  }

  addEmployee() {
    this.employee.isEmployee = true;
    let self = this;
    if (this.userProvider.userSelected == undefined) {
      this.userProvider.create(this.employee, true).subscribe(response => {
        let alert = this.alertCtrl.create({
          title: environment.successEmployeeCreated,
          buttons: [environment.ok]
        });
        alert.present();
        self.navCtrl.pop();
      });
    } else {
      this.userProvider.create(this.employee, false).subscribe(response => {
        let alert = this.alertCtrl.create({
          title: environment.successEmployeeUpdated,
          buttons: [environment.ok]
        });
        alert.present();
        self.navCtrl.pop();
      });
    }
  }

  removeEmployee() {
    this.userProvider.delete(this.employee.id).subscribe(response => {
      let alert = this.alertCtrl.create({
        title: environment.successEmployeeRemoved,
        buttons: [environment.ok]
      });
      alert.present();
      this.navCtrl.pop();
    });
  }

  back() {
    this.userProvider.userSelected = undefined;
    this.navCtrl.pop();
  }
}
