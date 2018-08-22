import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EmployeePProvider {

  employeeSelected: User;

  employeesRef: AngularFireList<any>;
  employeeList: Observable<any[]>;

  constructor(public database: AngularFireDatabase) {
    this.employeesRef = this.database.list('employee');
    this.employeeList = this.employeesRef.snapshotChanges().pipe(
      map(actions => actions.map(c => {
        return {key: c.payload.key, ...c.payload.val()};
      }))
    );
  }

  addEmployee(employee: User): void {
    this.employeesRef.push(employee);
  }

  editEmployee(employee: User): void {
    let key = employee.key;
    this.employeesRef.update(key, employee);
  }

  removeEmployee(employee: User): void {
    //this.employeeList.splice(0, 1);
    let key = employee.key;
    this.employeesRef.remove(key);
  }

}
