import { MeetingPProvider } from './../../providers/meeting-p/meeting-p';
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
  public dateModel : Date = new Date();
  showResult: boolean = false;
  serviceList: Service[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public serviceProvider: ServicePProvider, public meetingPProvider: MeetingPProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerMeetingPage');
  }

  getServicesByGenre(){
    this.serviceModel = undefined;
    this.serviceProvider.getServicesByGenre(this.genre);
  }

  searchAvaiableMeetings(){
    this.showResult = true;
    this.meetingPProvider.getMeetingByDate(this.dateModel);
  }

  back(): void{
    this.showResult = false;
  }

}
