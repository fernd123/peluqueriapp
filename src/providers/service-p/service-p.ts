import { Injectable } from '@angular/core';
import { Service } from '../../models/service-model.';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ServicePProvider {
  serviceSelected: Service;
  
  serviceRef: AngularFireList<any>;
  serviceList: Observable<any[]>;
  serviceByGenreList: Observable<{ key: string; }[]>;
  
  constructor(public database: AngularFireDatabase
  ) {
    this.serviceRef = this.database.list('service');
    this.serviceList = this.serviceRef.snapshotChanges().pipe(
      map(actions => actions.map(c => {
        return {key: c.payload.key, ...c.payload.val()};
      }))
    );
  }

  addService(service: Service): void {
    this.serviceRef.push(service);
  }

  editService(service: Service): void {
    let key = service.key;
    this.serviceRef.update(key, service);
  }

  removeService(service: Service): void {
    let key = service.key;
    this.serviceRef.remove(key);
  }

  getServicesByGenre(genre: string): void {
    this.serviceByGenreList = this.database.list('/service', ref => ref.orderByChild('genre').equalTo(genre)).snapshotChanges().pipe(
      map(actions => actions.map(c => {
        return {key: c.payload.key, ...c.payload.val()};
      }))
    );;
  }

}
