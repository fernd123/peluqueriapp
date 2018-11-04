import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ServicePProvider } from './../../../providers/service-p/service-p';
import { environment } from './../../../environments/enviroment';


@Component({
  selector: 'page-manageservices',
  templateUrl: 'manage-services.html',
})
export class ManageServicesPage {

  title: String;
  action: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public serviceProvider: ServicePProvider, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    let serviceSelected = this.serviceProvider.serviceSelected;
    console.log(serviceSelected);
    if (serviceSelected != undefined && serviceSelected != null && serviceSelected.id != undefined) {
      this.title = `${environment.editServiceTitle} ${serviceSelected.name}`;
    } else {
      this.title = environment.newServiceTitle;
    }
    this.action = environment.save;
  }

  saveService() {
    let self = this;
    this.serviceProvider.saveService().subscribe(function (service) {
      let alert = self.alertCtrl.create({
        title: environment.successServiceCreated,
        buttons: [environment.ok]
      });
      alert.present();
      self.navCtrl.pop();
    });
  }

  removeService() {
    let self = this;
    this.serviceProvider.delete().subscribe(function (service) {
      let alert = self.alertCtrl.create({
        title: environment.successServiceRemoved,
        buttons: [environment.ok]
      });
      alert.present();
      self.navCtrl.pop();
    });
  }

  back() {
    this.navCtrl.pop();
  }

}
