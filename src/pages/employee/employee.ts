import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';
import { User } from '../../models/user-model';
import { ManageEmployeePage } from './manage-employee/manage-employee';
import { EmployeePProvider } from '../../providers/employee-p/employee-p';



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
    public employeProvider: EmployeePProvider, public loadingCtrl: LoadingController){
      this.loading = this.loadingCtrl.create({
        content: 'Cargando...'
      });
      this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeePage');
    this.loading.dismiss();
  }

  public onInput($event){
    console.log('Input: '+this.searchInput);
  }

  public onCancel($event){
    console.log('Input: '+this.searchInput);
  }

  public addEmployee(){
    this.employeProvider.employeeSelected = undefined;
    this.navCtrl.push(this.addEmployeePage);
  }

  public editEmployee(employee: User){
    this.employeProvider.employeeSelected = employee;
    this.navCtrl.push(this.addEmployeePage);
  }
}
