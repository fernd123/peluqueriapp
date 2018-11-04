import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CompanyPProvider } from './../../../providers/company-p/company-p';
import { Component } from '@angular/core';
import { environment } from './../../../environments/enviroment';

@Component({
  selector: 'page-managecompany',
  templateUrl: 'manage-company.html',
})

export class ManageCompanyPage {

  title: String;
  action: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public companyPProvider: CompanyPProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    let companySelected = this.companyPProvider.companySelected;
    if (companySelected != undefined && companySelected != null && companySelected.id != undefined) {
      this.title = environment.editCompanyTitle + ` ${companySelected.name}`;
    } else {
      this.title = environment.newCompanyTitle;
    }
    this.action = environment.save;
  }

  public saveCompany() {
    let self = this;
    this.companyPProvider.saveCompany().subscribe(function (company) {
      let alert = self.alertCtrl.create({
        title: environment.successCompanyCreated,
        buttons: [environment.ok]
      });
      alert.present();
      self.navCtrl.pop();
    });
  }

  public back() {
    this.navCtrl.pop();
  }
}
