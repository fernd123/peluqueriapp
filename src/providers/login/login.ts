import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginProvider {

  user: any;
  userRef: AngularFireList<any>;
  userList: Observable<any[]>;
  userLoginList: Observable<{ key: string; }[]>;

  constructor(public database: AngularFireDatabase) {
    console.log('Hello LoginProvider Provider');
    this.userRef = this.database.list('user');
    /* this.userList = this.userRef.snapshotChanges().pipe(
      map(actions => actions.map(c => {
        return {key: c.payload.key, ...c.payload.val()};
      }))
    );
    */
  }

  //TODO: Crear el servicio
  public login(email: string, password: string){
    
    let user: User = new User();
    user.isAdmin = true;
    user.isCustomer = false;
    user.name = "Kobe";
    user.lastname = "Poe";
    user.email = "kobepoe@gmail.com";
    user.phone = "481-12-11-33";
    this.user = user;
    return user;
  }

  public register(){

  }

}
