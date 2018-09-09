import { Company } from './../../../models/company-model';
import { CompanyPProvider } from './../../../providers/company-p/company-p';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-managecompany',
  templateUrl: 'manage-company.html',
})

export class ManageCompanyPage {

  title: String;
  action: String; 

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public companyPProvider: CompanyPProvider) {
  }

  ionViewDidLoad() {
    let companySelected = this.companyPProvider.companySelected;
    if(companySelected != undefined && companySelected != null){
      this.title = `Editar Información Empresa: ${companySelected.name}`;
      this.action = "Guardar Cambios";
    }else{
      this.title = "Alta Información Empresa";
      this.action = "Guardar";
    }
  }

  public saveCompany(){
    this.companyPProvider.saveCompany();
    this.navCtrl.pop();
  }

  public back() {
    this.navCtrl.pop();
  }
}
