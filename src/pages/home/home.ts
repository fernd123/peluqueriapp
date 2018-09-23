import { EmployeePProvider } from './../../providers/employee-p/employee-p';
import { CustomerMeetingPage } from './../customer-meeting/customer-meeting';
import { LoginProvider } from './../../providers/login/login';
import { LoginPage } from '../login/login';
import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController, NavParams } from 'ionic-angular';
import { EmployeePage } from '../employee/employee';
import { Page } from 'ionic-angular/navigation/nav-util';
import { MeetingPage } from '../meetings/meeting';
import { ServicesPage } from '../services/services';
import { CompanyinfoPage } from '../companyinfo/companyinfo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('contenido') contenido:NavController;
  usuarioEstaConectado = true;
  companyPage: Page = CompanyinfoPage;
  employeePage: Page = EmployeePage;
  loginPage: Page = LoginPage;
  servicesPage: Page = ServicesPage;
  meetingsPage: Page = MeetingPage;
  meetingsCustomerPage: Page = CustomerMeetingPage;
  rootPage: Page = undefined;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public menuCtrl: MenuController, public employeePProvider: EmployeePProvider) {
    if(employeePProvider.userLoged.isAdmin){
      this.rootPage = this.employeePage;
    }else if(employeePProvider.userLoged.isCustomer){
      this.rootPage = this.meetingsCustomerPage;
    }else if(employeePProvider.userLoged.isEmployee){
      this.rootPage = this.employeePage;
    }
  }

  loadPage(pagina){
    this.contenido.setRoot(pagina);
    this.menuCtrl.close();
  }

}
