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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    EmployeePage,
    ServicesPage,
    MeetingsPage,
    ManageEmployeePage,
    ManageServicesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    EmployeePage,
    ServicesPage,
    MeetingsPage,
    ManageEmployeePage,
    ManageServicesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LoginProvider,
    EmployeePProvider,
    ServicePProvider
  ]
})
export class AppModule {}
