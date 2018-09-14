import { MeetingPProvider } from './../../providers/meeting-p/meeting-p';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading } from 'ionic-angular';
import { Page } from 'ionic-angular/navigation/nav-util';

@Component({
  selector: 'page-meeting',
  templateUrl: 'meeting.html',
})
export class MeetingPage {

  addEmployeePage: Page = null;
  shouldShowCancel: boolean = true;
  searchInput: String; 
  loading: Loading;

  public initialDateModel: Date = new Date();
  public finalDateModel: Date = new Date();

  public generateMeetingButtonTitle: String = "Generar Citas";
  public searchMeetingButtonTitle: String = "Buscar Cita";
  public showGenerateMeetingContent: Boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public meetingPProvider: MeetingPProvider, public loadingCtrl: LoadingController){
      this.loading = this.loadingCtrl.create({
        content: 'Cargando...'
      });
      this.loading.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingPage');
    this.loading.dismiss();
  }

  showGenerateMeeting(): void{
    this.showGenerateMeetingContent = !this.showGenerateMeetingContent;
    if(this.showGenerateMeetingContent == false){
      this.initialDateModel = undefined;
      this.finalDateModel = undefined;
    }
  }

  generateMeeting(): void{
    this.meetingPProvider.generateMeetings(this.initialDateModel, this.finalDateModel);
  }

  searchMeeting(): void{
    
  }
}
