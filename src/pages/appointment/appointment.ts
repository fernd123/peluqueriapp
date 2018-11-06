import { environment } from './../../environments/enviroment';
import { CompanyPProvider } from './../../providers/company-p/company-p';
import { Company } from './../../models/company-model';
import { AppointmentPProvider } from '../../providers/appointment-p/appointment-p';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, Loading, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
})
export class AppointmentPage {

  public generateMeetingButtonTitle: String = "Generar Citas";
  public searchMeetingButtonTitle: String = "Buscar Cita";
  public showAllMeetingButtonTitle: String = "Ver todas las citas";

  public searchInput: String;
  private loading: Loading;

  public company: Company = new Company();
  public initialDateModel: Date = new Date();
  public finalDateModel: Date = new Date();
  public excludeNoWorkingDays: boolean = true;

  public hideOptions: boolean = false;
  public showGenerateMeetingContent: Boolean = false;
  public showAllMeetingsContent: boolean;

  public companyList: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public appointmentPProvider: AppointmentPProvider, public companyProvider: CompanyPProvider,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
    this.showLoading();
    let self = this;
    this.companyProvider.getCompanies().subscribe(function (company) {
      self.companyList = company;
      self.loading.dismiss();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeetingPage');
  }

  showGenerateMeeting(): void {
    this.showGenerateMeetingContent = !this.showGenerateMeetingContent;
    this.hideOptions = true;
    if (this.showGenerateMeetingContent == false) {
      this.initialDateModel = undefined;
      this.finalDateModel = undefined;
      this.hideOptions = false;
    }
  }

  showAllMeetings(): void {
    let self = this;
    self.showAllMeetingsContent = !this.showAllMeetingsContent;
    self.hideOptions = true;
    if (self.showAllMeetingsContent == false) {
      self.hideOptions = false;
    } else {
      this.showLoading();
      this.appointmentPProvider.getLastAppointments(null).subscribe(function (appointments) {
        self.appointmentPProvider.appointmentList = appointments;
        self.loading.dismiss();
      });
    }
  }

  generateAppointment(): void {
    let self = this;
    this.showGeneratingAppointments();
    this.appointmentPProvider.generateAppointment(this.company, this.initialDateModel, this.finalDateModel, this.excludeNoWorkingDays).subscribe(function (res) {
      self.loading.dismiss();
      let alert = self.alertCtrl.create({
        title: environment.successAppointmentGenerated,
        buttons: [environment.ok]
      });
      alert.present();
      self.showGenerateMeeting();
    });
  }

  searchMeeting(): void {

  }

  private showLoading(): void {
    this.loading = this.loadingCtrl.create({
      content: environment.loading
    });
    this.loading.present();
  }

  private showGeneratingAppointments() :void {
    this.loading = this.loadingCtrl.create({
      content: environment.generatingAppointments
    });
    this.loading.present();
  }
}
