import { ServicePProvider } from './../../providers/service-p/service-p';
import { Service } from './../../models/service-model.';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-customer-meeting',
  templateUrl: 'customer-meeting.html',
})
export class CustomerMeetingPage {

  title: string = "Reservar Cita";
  serviceModel: Service =  undefined;
  genre: string = undefined;
  date : Date = new Date();
  serviceList: Service[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,
  public serviceProvider: ServicePProvider) {
    this.serviceList = this.serviceProvider.serviceList;
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerMeetingPage');
  }

  getServicesByGenre(){
    this.serviceModel = undefined;
    this.serviceList = this.serviceProvider.getServicesByGenre(this.genre);
  }

  searchAvaiableMeetings(){

  }

}
