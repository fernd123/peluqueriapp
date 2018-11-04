import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Appointment } from '../../models/appointment-model';
import { Observable } from 'rxjs';
import { environment } from './../../environments/enviroment';
import { Company } from './../../models/company-model';
import { Service } from '../../models/service-model.';

@Injectable()
export class AppointmentPProvider {

  public appointmentList: any = [];

  private urlEndPoint: string = `${environment.urlEndPoint}/appointments`;
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  generateAppointment(company: Company, initialDateModel: Date, finalDateModel: Date, excludeNoWorkingDays: boolean): any {
    return this.http.post(`${this.urlEndPoint}/generate/${company.id}/${initialDateModel}/${finalDateModel}/${excludeNoWorkingDays}`, { headers: this.httpHeaders });
  }

  getLastAppointments(company: Company) {
    return this.http.get(`${this.urlEndPoint}`, { headers: this.httpHeaders });
  }

  searchAvaiableAppointment(dateModel: Date): any {
    return this.http.get(`${this.urlEndPoint}/?date=${dateModel}`, { headers: this.httpHeaders });
  }

}
