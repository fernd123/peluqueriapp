import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { ManageServicesPage } from './manage-services/manage-services';
import { ServicePProvider } from '../../providers/service-p/service-p';
import { Page } from 'ionic-angular/navigation/nav-util';
import { Service } from './../../models/service-model.';
import { environment } from './../../environments/enviroment';

@Component({
  selector: 'page-services',
  templateUrl: 'services.html',
})
export class ServicesPage {

  manageServicePage: Page = ManageServicesPage;
  shouldShowCancel: boolean = true;
  searchInput: String;
  loading: Loading;
  loadContent: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public serviceProvider: ServicePProvider, private loadingCtrl: LoadingController) {
    this.showLoading();
    this.loadContent = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ServicesPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ServicesPage');
    let self = this;
    this.serviceProvider.getServices().subscribe(function (company) {
      self.serviceProvider.serviceList = company;
      self.loading.dismiss();
      this.loadContent = false;
    });
  }

  public onInput($event) {
    console.log('Input: ' + this.searchInput);
    this.serviceProvider.getServicesByValue(this.searchInput);
  }

  public onCancel($event) {
    console.log('Input: ' + this.searchInput);
    let self = this;
    this.serviceProvider.getServices().subscribe(function (service) {
      self.serviceProvider.serviceList = service;
    });
  }

  public addService() {
    this.serviceProvider.serviceSelected = new Service();
    this.navCtrl.push(this.manageServicePage);
  }

  public editService(service: Service) {
    this.serviceProvider.serviceSelected = service;
    this.navCtrl.push(this.manageServicePage);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: environment.loading
    });
    this.loading.present();
  }
}
