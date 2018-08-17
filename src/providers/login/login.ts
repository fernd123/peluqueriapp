import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';


@Injectable()
export class LoginProvider {

  user: User;

  constructor() {
    console.log('Hello LoginProvider Provider');
  }

  //TODO: Crear el servicio
  public login(email: String, password: String){
    let user: User = new User();
    user.isAdmin = true;
    user.name = "Kobe";
    user.lastname = "Poe";
    user.email = "kobepoe@gmail.com";
    user.phone = "481-12-11-33";
    this.user = user;
    return user;
  }

}
