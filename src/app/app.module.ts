import { ManageCompanyPage } from './../pages/companyinfo/manage-company/manage-company';
import { CustomerMeetingPage } from './../pages/customer-meeting/customer-meeting';
import { ManageServicesPage } from './../pages/services/manage-services/manage-services';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { LoginProvider } from '../providers/login/login';
import { EmployeePage } from '../pages/employee/employee';
import { ServicesPage } from '../pages/services/services';
import { MeetingsPage } from '../pages/meetings/meetings';
import { ManageEmployeePage } from '../pages/employee/manage-employee/manage-employee';
import { EmployeePProvider } from '../providers/employee-p/employee-p';
import { ServicePProvider } from '../providers/service-p/service-p';
import { CompanyinfoPage } from '../pages/companyinfo/companyinfo';
import { CompanyPProvider } from '../providers/company-p/company-p';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MeetingPProvider } from '../providers/meeting-p/meeting-p';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCt35KNelBpJ2WO2ZAS-8il_O5tPTKZcbY",
  authDomain: "peluqueriapp-e82df.firebaseapp.com",
  databaseURL: "https://peluqueriapp-e82df.firebaseio.com",
  projectId: "peluqueriapp-e82df",
  storageBucket: "peluqueriapp-e82df.appspot.com",
  messagingSenderId: "566580695590"
};

@NgModule({
  declarations: [
    MyApp,
    CompanyinfoPage,
    HomePage,
    LoginPage,
    RegisterPage,
    EmployeePage,
    ServicesPage,
    MeetingsPage,
    ManageEmployeePage,
    ManageServicesPage,
    CustomerMeetingPage,
    ManageCompanyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CompanyinfoPage,
    HomePage,
    LoginPage,
    RegisterPage,
    EmployeePage,
    ServicesPage,
    MeetingsPage,
    ManageEmployeePage,
    ManageServicesPage,
    CustomerMeetingPage,
    ManageCompanyPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    EmployeePProvider,
    ServicePProvider,
    CompanyPProvider,
    MeetingPProvider
  ]
})
export class AppModule {}
