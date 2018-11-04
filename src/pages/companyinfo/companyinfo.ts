import { Page } from 'ionic-angular/navigation/nav-util';
import { ManageCompanyPage } from './manage-company/manage-company';
import { Company } from './../../models/company-model';
import { CompanyPProvider } from './../../providers/company-p/company-p';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { environment } from '../../environments/enviroment';

@Component({
  selector: 'page-companyinfo',
  templateUrl: 'companyinfo.html',
})
export class CompanyinfoPage {

  manageCompanyInfo: Page = ManageCompanyPage;
  title: string = environment.companyDataTitle;
  loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public companyPProvider: CompanyPProvider, private loadingCtrl: LoadingController) {
    this.showLoading();
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CompanyinfoPage');
    let self = this;
    this.companyPProvider.getCompanies().subscribe(function (company) {
      self.companyPProvider.companyList = company;
      self.loading.dismiss();
    });
  }

  public addCompany() {
    this.companyPProvider.companySelected = new Company();
    this.navCtrl.push(this.manageCompanyInfo);
  }

  public editCompany(company: Company) {
    this.companyPProvider.companySelected = company;
    this.navCtrl.push(this.manageCompanyInfo);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: environment.loading
    });
    this.loading.present();
  }
}
