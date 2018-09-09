import { Page } from 'ionic-angular/navigation/nav-util';
import { ManageCompanyPage } from './manage-company/manage-company';
import { Company } from './../../models/company-model';
import { CompanyPProvider } from './../../providers/company-p/company-p';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';

@Component({
  selector: 'page-companyinfo',
  templateUrl: 'companyinfo.html',
})
export class CompanyinfoPage {

  manageCompanyInfo: Page = ManageCompanyPage;
  title:string = "Datos de la Empresa";
  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public companyPProvider: CompanyPProvider, public loadingCtrl: LoadingController){
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...'
    });
    this.loading.present();
    //console.log(this.companyProvider.companyModel);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyinfoPage');
    this.loading.dismiss();
  }

  public addCompany(){
    this.companyPProvider.companySelected = new Company();
    this.navCtrl.push(this.manageCompanyInfo);
  }

  public editCompany(company: Company){
    this.companyPProvider.companySelected = company;
    this.navCtrl.push(this.manageCompanyInfo);
  }
}
