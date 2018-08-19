import { LoginPage } from '../login/login';
import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, NavParams } from 'ionic-angular';
import { EmployeePage } from '../employee/employee';
import { Page } from 'ionic-angular/navigation/nav-util';
import { MeetingsPage } from '../meetings/meetings';
import { ServicesPage } from '../services/services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('contenido') contenido:NavController;
  usuarioEstaConectado = true;
  employeePage: Page = EmployeePage;
  loginPage: Page = LoginPage;
  servicesPage: Page = ServicesPage;
  meetingsPage: Page = MeetingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public menuCtrl: MenuController) {
  }

  loadPage(pagina){
    this.contenido.setRoot(pagina);
    this.menuCtrl.close();
  }

}
