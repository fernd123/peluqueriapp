import { ServicePProvider } from './../../../providers/service-p/service-p';
import { Service } from './../../../models/service-model.';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-manageservices',
  templateUrl: 'manage-services.html',
})
export class ManageServicesPage {

  service: Service = new Service();
  title: String;
  action: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public serviceProvider: ServicePProvider) {
  }

  ionViewDidLoad() {
    let serviceSelected = this.serviceProvider.serviceSelected;
    if (serviceSelected != undefined && serviceSelected != null) {
      this.title = `Editar Servicio: ${serviceSelected.name}`;
      this.action = "Guardar Cambios";
      this.service = this.serviceProvider.serviceSelected;
    } else {
      this.title = "Nuevo Servicio";
      this.action = "Alta Servicio";
    }
  }

  addService() {
    if(this.action == 'Nuevo Servicio'){
      this.serviceProvider.addService(this.service);
    }else{
      this.serviceProvider.editService(this.service);
    }
    this.navCtrl.pop();
  }

  removeService() {
    this.serviceProvider.removeService(this.service);
    this.navCtrl.pop();
  }

  back() {
    this.navCtrl.pop();
  }

}
