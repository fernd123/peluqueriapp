import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class EmployeePProvider {

  employeeSelected: User;
  userLoged: User = new User();
  employeesRef: AngularFireList<any>;
  employeeList: Observable<any[]>;
  userByEmail: Observable<any[]>;

  constructor(public database: AngularFireDatabase) {
    console.log('Hello EmployeePProvider Provider');
    this.employeesRef = this.database.list('user');
    this.employeeList = this.employeesRef.snapshotChanges().pipe(
      map(actions => actions.map(c => {
        return { key: c.payload.key, ...c.payload.val() };
      }))
    );
  }


  ngOnInit() {
    this.employeesRef = this.database.list('/user');
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

  getUserByEmail(email: string, password: String) {
    this.userByEmail = this.database.list('/user',
      ref =>
        ref.orderByChild('email')
          .equalTo(email))
      .snapshotChanges().pipe(
        map(actions => actions.map(c => {
          return { key: c.payload.key, ...c.payload.val() };
        }))
      );
  }

}
