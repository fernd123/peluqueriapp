import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { User } from '../../models/user-model';
import { ManageEmployeePage } from './manage-employee/manage-employee';
import { UserProvider } from './../../providers/user-p/user-p';
import { environment } from '../../environments/enviroment';



@Component({
  selector: 'page-employee',
  templateUrl: 'employee.html',
})
export class EmployeePage {

  addEmployeePage: Page = ManageEmployeePage;
  shouldShowCancel: boolean = true;
  searchInput: String;
  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public userProvider: UserProvider, public loadingCtrl: LoadingController) { }

  ionViewWillEnter() {
    console.log('ionViewWillEnter EmployeePage');
    let self = this;
    this.showLoading();
    this.userProvider.userSelected = undefined;

    this.userProvider.getEmployees().subscribe(function (employees) {
      self.userProvider.employeeList = employees;
      self.loading.dismiss();
    });
    if (this.searchInput != undefined && this.searchInput.length != 0) {
      this.userProvider.getEmpoyeesByValue(this.searchInput);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeePage');
  }


  public onInput($event) {
    console.log('Input: ' + this.searchInput);
    this.userProvider.getEmpoyeesByValue(this.searchInput);
  }

  public onCancel($event) {
    console.log('Input: ' + this.searchInput);
    let self = this;
    this.userProvider.getEmployees().subscribe(function (employees) {
      self.userProvider.employeeList = employees;
    });
  }

  public addEmployee() {
    this.navCtrl.push(this.addEmployeePage);
  }

  public editEmployee(employee: User) {
    this.userProvider.userSelected = employee;
    this.navCtrl.push(this.addEmployeePage);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: environment.loading
    });
    this.loading.present();
  }
}