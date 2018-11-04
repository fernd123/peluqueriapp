import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, NavParams } from 'ionic-angular';
import { AppointmentPage } from './../appointment/appointment';
import { CustomerAppointmentPage } from './../customer-appointment/customer-appointment';
import { LoginPage } from '../login/login';
import { EmployeePage } from '../employee/employee';
import { Page } from 'ionic-angular/navigation/nav-util';
import { ServicesPage } from '../services/services';
import { CompanyinfoPage } from '../companyinfo/companyinfo';
import { UserProvider } from './../../providers/user-p/user-p';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('contenido') contenido: NavController;
  usuarioEstaConectado = true;
  companyPage: Page = CompanyinfoPage;
  employeePage: Page = EmployeePage;
  loginPage: Page = LoginPage;
  servicesPage: Page = ServicesPage;
  appointmentPage: Page = AppointmentPage;
  appintmentCustomerPage: Page = CustomerAppointmentPage;
  rootPage: Page = undefined;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public menuCtrl: MenuController, public userProvider: UserProvider) {
    if (userProvider.userLoged.isAdmin) {
      this.rootPage = this.employeePage;
    } else if (userProvider.userLoged.isCustomer) {
      this.rootPage = this.appintmentCustomerPage;
    } else if (userProvider.userLoged.isEmployee) {
      this.rootPage = this.employeePage;
    }
  }

  loadPage(pagina) {
    this.contenido.setRoot(pagina);
    this.menuCtrl.close();
  }
}
