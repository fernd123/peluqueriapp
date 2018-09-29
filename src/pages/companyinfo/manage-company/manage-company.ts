import { Upload } from './../../../models/upload-model';
import { Company } from './../../../models/company-model';
import { CompanyPProvider } from './../../../providers/company-p/company-p';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-managecompany',
  templateUrl: 'manage-company.html',
})

export class ManageCompanyPage {

  title: String;
  action: String;
  images: String[];
  base64Image: any = null;

  selectedFiles: FileList;
  currentUpload: Upload;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public companyPProvider: CompanyPProvider, public imagePicker: ImagePicker,
    private camera: Camera) {
  }

  ionViewDidLoad() {
    let companySelected = this.companyPProvider.companySelected;
    if (companySelected != undefined && companySelected != null) {
      this.title = `Editar Información Empresa: ${companySelected.name}`;
      this.action = "Guardar Cambios";
    } else {
      this.title = "Alta Información Empresa";
      this.action = "Guardar";
    }
  }

  public saveCompany() {
    this.companyPProvider.companySelected.image = this.base64Image;
    this.uploadSingle();
    this.companyPProvider.saveCompany();
    this.navCtrl.pop();
  }

  public back() {
    this.navCtrl.pop();
  }

  getLogo() {
    this.imagePicker.getPictures({
      maximumImagesCount: 1,
    }).then(results => {
      console.log(results);
      for (let i = 0; i < results.length; i++) {
        this.images.push(results[i]);
      };
    });
  }

  //take Photo
  takePhoto(sourceType: number) {
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: sourceType,
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
      this.base64Image = base64Image;
      let upload: Upload = new Upload(imageData);
      upload.name = "logocompany";
      this.companyPProvider.pushUpload(upload);
    }, (err) => {
      alert(err);

    });
  }

  // PRUEBAS
  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  uploadSingle() {
    let file = this.selectedFiles.item(0)
    this.currentUpload = new Upload(file);
    this.companyPProvider.pushUpload(this.currentUpload);
  }

  uploadMulti() {
   
  }

}
