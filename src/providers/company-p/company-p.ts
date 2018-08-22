import { Company } from './../../models/company-model';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CompanyPProvider {

  companyRef: AngularFireList<any>;
  companyList: Observable<any[]>;
  companyModel: Company = new Company();
  
  constructor(public database: AngularFireDatabase
  ) {
    this.companyRef = this.database.list('company');
    this.companyList = this.companyRef.snapshotChanges().pipe(
      map(actions => actions.map(c => {
        return {key: c.payload.key, ...c.payload.val()};
      }))
    );
  }

  saveCompany(company: Company): void {
    let key = company.key;
    if(key != undefined){
      this.companyRef.update(key, company);
    }else{
      this.companyRef.push(company);
    }
  }

}
