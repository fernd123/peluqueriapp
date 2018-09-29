import { Upload } from './../../models/upload-model';
import { Company } from './../../models/company-model';
import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import "firebase/storage";

@Injectable()
export class CompanyPProvider {

  companyModel: Company;
  companyRef: AngularFireList<any>;
  companyList: Observable<any[]>;
  companySelected: Company;

  private basePath:string = '/uploads';
  uploads: AngularFireList<Upload[]>;

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


  pushUpload(upload: Upload) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        //upload.progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error);
        alert(error);
      },
      () => {
        // upload success
        this.companySelected.image = upload.url;
        upload.url = uploadTask.snapshot.metadata.fullPath +'/'+ upload.file.name;
        upload.name = upload.file.name;
        this.saveFileData(upload);
      }
    );
  }



  // Writes the file details to the realtime db
  private saveFileData(upload: Upload) {
    this.database.list('uploads').push(upload);
  }


}
