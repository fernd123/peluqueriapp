import { EmployeePProvider } from './../employee-p/employee-p';
import { User } from '../../models/user-model';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginProvider {

  user: any;
  userRef: AngularFireList<any>;
  userList: Observable<any[]>;
  userLogin: Observable<any[]>;

  constructor(public employePProvider: EmployeePProvider) {
    console.log('Hello LoginProvider Provider');
  }

  public register() {

  }

}
