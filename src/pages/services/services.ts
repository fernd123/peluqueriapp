import { Service } from './../../models/service-model.';
import { ManageServicesPage } from './manage-services/manage-services';
import { Page } from 'ionic-angular/navigation/nav-util';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicePProvider } from '../../providers/service-p/service-p';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {


  manageServicePage: Page = ManageServicesPage;

  serviceList: Service[] = [];
  shouldShowCancel: boolean = true;
  searchInput: String; 
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public serviceProvider: ServicePProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }

  public onInput($event){
    console.log('Input: '+this.searchInput);
  }

  public onCancel($event){
    console.log('Input: '+this.searchInput);
  }

  public addService(){
    this.serviceProvider.serviceSelected = undefined;
    this.navCtrl.push(this.manageServicePage);
  }

  public editService(service: Service){
    this.serviceProvider.serviceSelected = service;
    this.navCtrl.push(this.manageServicePage);
  }



}
