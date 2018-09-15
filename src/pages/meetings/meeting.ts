import { MeetingPProvider } from './../../providers/meeting-p/meeting-p';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-meeting',
  templateUrl: 'meeting.html',
})
export class MeetingPage {

  public generateMeetingButtonTitle: String = "Generar Citas";
  public searchMeetingButtonTitle: String = "Buscar Cita";
  public showAllMeetingButtonTitle: String = "Ver todas las citas";
  
  public searchInput: String; 
  private loading: Loading;
  
  public initialDateModel: Date = new Date();
  public finalDateModel: Date = new Date();
  
  public hideOptions: boolean = false;  
  public showGenerateMeetingContent: Boolean = false;
  public showAllMeetingsContent: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public meetingPProvider: MeetingPProvider, public loadingCtrl: LoadingController,
    private alertCtrl: AlertController){
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
    this.hideOptions = true;
    if(this.showGenerateMeetingContent == false){
      this.initialDateModel = undefined;
      this.finalDateModel = undefined;
      this.hideOptions = false;
    }
  }

  showAllMeetings(): void{
    this.showAllMeetingsContent = !this.showAllMeetingsContent;
    this.hideOptions = true;
    if(this.showAllMeetingsContent == false){
      this.hideOptions = false;
    }
  }

  generateMeeting(): void{
    this.meetingPProvider.generateMeetings(this.initialDateModel, this.finalDateModel);
    this.showGenerateMeeting();
    let alert = this.alertCtrl.create({
      title: 'Citas generadas correctamente',
      buttons: ['OK']
    });
    alert.present();
  }

  searchMeeting(): void{
    
  }
}
