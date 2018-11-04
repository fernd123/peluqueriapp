import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule } from '@angular/common/http';

// Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { EmployeePage } from '../pages/employee/employee';
import { ServicesPage } from '../pages/services/services';
import { ManageEmployeePage } from '../pages/employee/manage-employee/manage-employee';
import { CompanyinfoPage } from '../pages/companyinfo/companyinfo';
import { ManageCompanyPage } from './../pages/companyinfo/manage-company/manage-company';
import { ManageServicesPage } from './../pages/services/manage-services/manage-services';
import { AppointmentPage } from './../pages/appointment/appointment';
import { CustomerAppointmentPage } from './../pages/customer-appointment/customer-appointment';

// Providers
import { LoginProvider } from '../providers/login/login';
import { UserProvider } from './../providers/user-p/user-p';
import { CompanyPProvider } from '../providers/company-p/company-p';
import { ServicePProvider } from '../providers/service-p/service-p';
import { AppointmentPProvider } from './../providers/appointment-p/appointment-p';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


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
    AppointmentPage,
    ManageEmployeePage,
    ManageServicesPage,
    CustomerAppointmentPage,
    ManageCompanyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    HttpClientModule
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
    AppointmentPage,
    ManageEmployeePage,
    ManageServicesPage,
    CustomerAppointmentPage,
    ManageCompanyPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    UserProvider,
    ServicePProvider,
    CompanyPProvider,
    AppointmentPProvider
  ]
})
export class AppModule {}
