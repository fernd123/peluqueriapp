import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { User } from '../../../models/user-model';
import { EmployeePProvider } from '../../../providers/employee-p/employee-p';


@Component({
  selector: 'page-manageemployee',
  templateUrl: 'manage-employee.html',
})

export class ManageEmployeePage {

  employee: User = new User();
  employeeList: User[] = [];
  title: String;
  action: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public employeProvider: EmployeePProvider) {
  }

  ionViewDidLoad() {
    let employeeSelected = this.employeProvider.employeeSelected;
    if(employeeSelected != undefined && employeeSelected != null){
      this.title = `Editar Empleado: ${employeeSelected.name} ${employeeSelected.lastname}`;
      this.action = "Guardar Cambios";
      this.employee = this.employeProvider.employeeSelected;
    }else{
      this.title = "Nuevo Empleado";
      this.action = "Alta Empleado";
    }
  }

  addEmployee() {
    if(this.action == 'Nuevo Empleado'){
      this.employeProvider.addEmployee(this.employee);
    }else{
      this.employeProvider.editEmployee(this.employee);
    }
    this.navCtrl.pop();
  }

  removeEmployee(){
    this.employeProvider.removeEmployee();
    this.navCtrl.pop();
  }

  back() {
    this.navCtrl.pop();
  }

}
