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

  title: string = environment.customerAppointmentHistoryTitle
  avaiableAppointmentList: Appointment[] = [];
  notes: any = [];
 
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl:LoadingController,
    private alertCtrl: AlertController, private userProvider:UserProvider,
    public serviceProvider: ServicePProvider, public appointmentPProvider: AppointmentPProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerMeetingPage');
  }

  addNote(){
 
    let prompt = this.alertCtrl.create({
        title: 'Add Note',
        inputs: [{
            name: 'title'
        }],
        buttons: [
            {
                text: 'Cancel'
            },
            {
                text: 'Add',
                handler: data => {
                    this.notes.push(data);
                }
            }
        ]
    });

    prompt.present();
}

editNote(note){

    let prompt = this.alertCtrl.create({
        title: 'Edit Note',
        inputs: [{
            name: 'title'
        }],
        buttons: [
            {
                text: 'Cancel'
            },
            {
                text: 'Save',
                handler: data => {
                    let index = this.notes.indexOf(note);

                    if(index > -1){
                      this.notes[index] = data;
                    }
                }
            }
        ]
    });

    prompt.present();      

}

deleteNote(note){
    let index = this.notes.indexOf(note);
    if(index > -1){
        this.notes.splice(index, 1);
    }
}
 
}
