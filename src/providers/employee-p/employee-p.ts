import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';


@Injectable()
export class EmployeePProvider {

  employeeList: User[] = [];
  employeeSelected: User;

  constructor() {
    console.log('Hello EmployeePProvider Provider');
  }

  addEmployee(employee: User): void {
    this.employeeList.push(employee);
  }

  //TODO: editar de verdad. No guardar uno nuevo
  editEmployee(employee: User): void {
    this.employeeList.push(employee);
  }

  removeEmployee(): void {
    this.employeeList.splice(0, 1);
  }

}
