import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';


@Injectable()
export class EmployeePProvider {

  employeeList: User[] = [];
  employeeSelected: User;

  constructor() {
    for(let i=0; i<10; i++){
      let employee: User = new User();
      employee.name = "Peluquero "+i;
      employee.lastname = "Apellido "+i;
      employee.genre = (i % 2 == 0 ) ? "women" : "men";
      employee.email = "email"+i+"@gmail.com";
      employee.id = "id"+i;
      employee.phone = "964-12-34-"+i+i;
      employee.password = "123";
      employee.isEmployee = true;
      employee.isActive = true;
      this.employeeList.push(employee);
    }
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
