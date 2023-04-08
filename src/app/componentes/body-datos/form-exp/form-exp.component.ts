import { Component, OnInit } from '@angular/core';
import { Experiencias } from 'src/app/modelos/Experiencias.model';
import { ExpService } from 'src/app/servicios/experiencias/exp.service';
import { ImgService } from 'src/app/servicios/imgServ/img.service';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-form-exp',
  templateUrl: './form-exp.component.html',
  styleUrls: ['./form-exp.component.scss']
})

export class FormExpComponent implements OnInit {

  constructor (
    private serv: ExpService,
    private token :TokenService,
    private imgS :ImgService
  ) {}

  img :string = '';

  nombre :string = '';
  descripcion :string = '';

  lista :Experiencias[] = [];

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
    let item = new Experiencias(this.nombre, this.descripcion, this.imgS.url);

    this.serv.save(item).subscribe(() => {
     try {
       alert('guardada');
       this.cargarDatos();
     } catch (error) {
      console.log(error);
     }
    });

  }

  delete(id :any) :void {
    this.serv.delete(id).subscribe(() => {
      try {
        alert('borrada');
        this.cargarDatos();
      } catch (error) {
       console.log(error);
      }
    });
  }

  cargarDatos() {
    this.serv.getExperiencias().subscribe(data => this.lista = data);
  }

  uploadImg($event :any) {
    const NAME = this.imgS.filePath("EXP_");
    this.imgS.uploadImage($event, NAME);
  }
}

