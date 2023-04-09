import { Injectable } from '@angular/core';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'any'
})

export class ImgService {

  public url: string = "";
  public banner: string = "";
  public perfil: string = "";
  public cv: string = "";

  constructor(private storage: Storage) { }

  uploadImage(event: any, name: string) {
    const file = event.target.files[0];
    const filePath = "images/" + name;
    const fileRef = ref(this.storage, filePath);

    const task = uploadBytes(fileRef, file).then(() => {
      this.getUrl(filePath);
    }).catch(err => console.log(err));
  }

  uploadCv(event: any, name: string) {
    const file = event.target.files[0];
    const filePath = "cv/" + name;
    const fileRef = ref(this.storage, filePath);

    const task = uploadBytes(fileRef, file).then(() => {
      this.getUrl(filePath);
    }).catch(err => console.log(err));
  }

  async getUrl(imagePath: string) {
    const REF = ref(this.storage, imagePath);

    const URL = await getDownloadURL(REF).then((url) => {
      switch (imagePath) {
        case "images/perfil":
          this.perfil = url;
          break;
        case "images/banner":
          this.banner = url;
          break
        case "cv/mycv":
          this.cv = url;
          break
        default:
          this.url = url;
          break;
      }
    }).catch(err => console.log(err));
  }

  filePath(fileNombre: string): string {
    const ID = Math.random().toString(5).substring(2);
    const NAME = fileNombre + ID;

    return NAME;
  }
}
