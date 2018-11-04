import { Appointment } from './../../models/appointment-model';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServicePProvider } from '../../providers/service-p/service-p';
import { AppointmentPProvider } from '../../providers/appointment-p/appointment-p';
import { Service } from '../../models/service-model.';


@Component({
  selector: 'page-customer-appointment',
  templateUrl: 'customer-appointment.html',
})
export class CustomerAppointmentPage {

  title: string = "Reservar Cita";
  serviceModel: Service = undefined;
  genre: string = undefined;
  public dateModel: Date = new Date();
  showResult: boolean = false;
  serviceList: Service[] = [];
  avaiableAppointmentList: Appointment[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
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
    this.appointmentPProvider.searchAvaiableAppointment(this.dateModel).subscribe(function(appointments){
      self.avaiableAppointmentList = appointments;
    });
  }

  back(): void {
    this.showResult = false;
  }

}
