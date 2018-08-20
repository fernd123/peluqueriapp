import { Injectable } from '@angular/core';
import { Service } from '../../models/service-model.';

@Injectable()
export class ServicePProvider {
  serviceSelected: Service;
  serviceList: Service[] = [];

  constructor() {
    console.log("Soy el provider del servicio");
    for (let i = 0; i < 10; i++) {
      let service: Service = new Service();
      service.name = "Corte de pelo " + i;
      service.description = "Descripción " + i;
      service.genre = (i % 2 == 0) ? "women" : "men";
      console.log(service.genre);
      service.duration = i;
      service.id = "id" + i;
      this.serviceList.push(service);
    }
  }

  addService(service: Service): void {
    this.serviceList.push(service);
  }

  editService(service: Service): void {
    this.serviceList.push(service);
  }

  removeService(service: Service): void {
    this.serviceList.splice(0, 1);
  }

  getServicesByGenre(genre: string): Service[] {
    let serviceByGenreList: Service[] = [];
    for (let i = 0; i < this.serviceList.length; i++) {
      if (this.serviceList[i].genre == genre) {
        serviceByGenreList.push(this.serviceList[i]);
      }
    }
    return serviceByGenreList;
  }

}
