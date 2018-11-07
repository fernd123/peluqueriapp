import { Component } from '@angular/core';
import { ServicePProvider } from './../../../providers/service-p/service-p';
import { NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { AppointmentPProvider } from './../../../providers/appointment-p/appointment-p';
import { UserProvider } from './../../../providers/user-p/user-p';
import { Appointment } from './../../../models/appointment-model';
import { environment } from '../../../environments/enviroment';


@Component({
  selector: 'page-customer-appointment-history',
  templateUrl: 'customer-appointment-history.html',
})
export class CustomerAppointmentHistoryPage {

  title: string = environment.customerAppointmentHistoryTitle;
  loading: Loading;
  loadingContent: boolean = true;
  appointmentByCustomer: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController,
    private alertCtrl: AlertController, private userProvider: UserProvider,
    public serviceProvider: ServicePProvider, public appointmentPProvider: AppointmentPProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerAppointmentHistoryPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter CustomerAppointmentHistoryPage');
    let self = this;
    this.showLoading();
    this.loadingContent = true;
    this.appointmentPProvider.getAppointmentByCustomerId(this.userProvider.userLoged).subscribe(function (appointments) {
      self.appointmentByCustomer = appointments;
      self.loadingContent = false;
      self.loading.dismiss();
    });
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: environment.loading
    });
    this.loading.present();
  }

}
