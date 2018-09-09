import { Company } from './../../models/company-model';
import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { User } from '../../models/user-model';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CompanyPProvider {

  companyModel: Company;
  companyRef: AngularFireList<any>;
  companyList: Observable<any[]>;
  companySelected: Company;

  constructor(public database: AngularFireDatabase) {
    this.companyRef = this.database.list('company');
    this.companyList = this.companyRef.snapshotChanges().pipe(
      map(actions => actions.map(c => {
        return {key: c.payload.key, ...c.payload.val()};
      }))
    );
  }
  
  saveCompany(): void {
    let key = this.companySelected.key;
    if(key != undefined){
      this.companyRef.update(key, this.companySelected);
    }else{
      this.companyRef.push(this.companySelected);
    }
  }

}
