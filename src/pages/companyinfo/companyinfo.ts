import { CompanyPProvider } from './../../providers/company-p/company-p';
import { Company } from './../../models/company-model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-companyinfo',
  templateUrl: 'companyinfo.html',
})
export class CompanyinfoPage {

  title:string = "Datos de la Empresa";
  company: Company = new Company();
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public companyProvider: CompanyPProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyinfoPage');
  }

  saveCompany(){
    this.companyProvider.saveCompany(this.company);
  }
}
