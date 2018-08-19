import { Injectable } from '@angular/core';
import { Service } from '../../models/service-model.';

@Injectable()
export class ServicePProvider {
  serviceSelected: Service;
  serviceList: Service[] = [];

  constructor() {
    console.log('Hello ServicePProvider Provider');
  }

  addService(service: Service): void {
    this.serviceList.push(service);
  }

  editService(service: Service): void {
    this.serviceList.push(service);
  }

  removeService(service: Service): void{
    this.serviceList.splice(0, 1);
  }

}
