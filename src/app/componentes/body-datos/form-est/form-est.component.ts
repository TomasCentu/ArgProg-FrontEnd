import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/modelos/Estudios.model';
import { EstService } from 'src/app/servicios/estudios/est.service';
import { ImgService } from 'src/app/servicios/imgServ/img.service';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-form-est',
  templateUrl: './form-est.component.html',
  styleUrls: ['./form-est.component.scss']
})

export class FormEstComponent implements OnInit {

  constructor (
    private serv: EstService,
    private token :TokenService,
    private imgS :ImgService
  ) {}

  img :string = '';

  nombre :string = '';
  descripcion :string = '';

  estudios :Estudios[] = [];

  isLogged = false;

  ngOnInit(): void {
    this.cargarDatos();

    if (this.token.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  save() :void {
    let estudio = new Estudios(this.nombre, this.descripcion, this.imgS.url);

    this.serv.save(estudio).subscribe(() => {
     try {
       this.cargarDatos();
     } catch (error) {
      console.log(error);
     }
    });
  }

  delete(id :any) :void {
    this.serv.delete(id).subscribe(() => {
      try {
        this.cargarDatos();
      } catch (error) {
       console.log(error);
      }
    });
  }

  cargarDatos() {
    this.serv.getEstudios().subscribe(data => this.estudios = data);
  }

  uploadImg($event :any) {
    const NAME = this.imgS.filePath("EST_");
    this.imgS.uploadImage($event, NAME);
  }
}
