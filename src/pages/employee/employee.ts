import { HomePage } from '../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  employeeList: User[] = [];
  shouldShowCancel: boolean = true;
  searchInput: String; 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public employeProvider: EmployeePProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeePage');
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

  public editEmployee(employee: User, index: number){
    this.employeProvider.employeeSelected = employee;
    this.navCtrl.push(this.addEmployeePage);
  }
}
