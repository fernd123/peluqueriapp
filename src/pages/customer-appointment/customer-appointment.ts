import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { ServicePProvider } from '../../providers/service-p/service-p';
import { AppointmentPProvider } from '../../providers/appointment-p/appointment-p';
import { Service } from '../../models/service-model.';
import { UserProvider } from './../../providers/user-p/user-p';
import { environment } from './../../environments/enviroment';
import { Appointment } from './../../models/appointment-model';
import { DateUtils } from '../../utils/date-utils';


@Component({
  selector: 'page-customer-appointment',
  templateUrl: 'customer-appointment.html',
})
export class CustomerAppointmentPage {

  avaiableAppointmentList: Appointment[] = [];
  serviceList: Service[] = [];
  serviceModel: Service = undefined;
  dateModel: Date = undefined;
  loading: Loading;
  title: string = "Reservar Cita";
  genre: string = undefined;
  showResult: boolean = false;
  loadingContent: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl:LoadingController,
    private alertCtrl: AlertController, private userProvider:UserProvider,
    public serviceProvider: ServicePProvider, public appointmentPProvider: AppointmentPProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerMeetingPage');
  }

  getServicesByGenre() {
    this.serviceModel = undefined;
    let self = this;
    this.serviceProvider.getServicesByGenre(this.genre).subscribe(function(services){
      self.serviceList = services;
    });
  }

  searchAvaiableAppointments() {
    this.showResult = true;
    let self = this;
    this.showLoading();
    this.appointmentPProvider.searchAvaiableAppointment(this.dateModel).subscribe(function(appointments){
      self.dissmissLoading();
      self.avaiableAppointmentList = appointments;
    });
  }

  bookAppointment(appointment: Appointment, appointmentCard: any): void{
    appointmentCard.style.backgroundColor = environment.orange;
    let dateFormated = DateUtils.getDateName(appointment.date);

    let bookAlert = this.alertCtrl.create({
      title: environment.titleBookAppointment,
      message: `<br><b>${dateFormated}<br>Hora: ${appointment.initialHour}:${appointment.initialMinute == 0 ?
        '00' : appointment.initialMinute}-${appointment.finalHour}:${appointment.finalMinute== 0 ?
          '00' : appointment.finalMinute}</b>`,
      buttons: [
        {
          text: 'Cancelar',
          handler: () => {
            appointmentCard.style.backgroundColor = "";
            console.log('Cancel clicked');
          }
        },
        {
          text: environment.confirm,
          handler: () => {
            appointmentCard.style.backgroundColor = "";
            appointment.serviceId = this.serviceModel.id;
            appointment.customerId = this.userProvider.userLoged.id;
            this.appointmentPProvider.updateAppointment(appointment).subscribe(function(result){
              //TODO: Falta el servicio
              console.log(result);
            });
          }
        }
      ]
    });
    bookAlert.present();
  }


  back(): void {
    this.showResult = false;
  }

  private showLoading() :void {
    this.loading = this.loadingCtrl.create({
      content: environment.searchingAvaiableAppointments
    });
    this.loadingContent = true;
    this.loading.present();
  }

  private dissmissLoading(): void{
    this.loadingContent =false;
    this.loading.dismiss();
  }

}
