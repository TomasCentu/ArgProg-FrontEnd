import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/modelos/Proyectos.model';
import { ImgService } from 'src/app/servicios/imgServ/img.service';
import { ProService } from 'src/app/servicios/proyectos/pro.service';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-form-pro',
  templateUrl: './form-pro.component.html',
  styleUrls: ['./form-pro.component.scss']
})
export class FormProComponent implements OnInit {

  constructor (
    private serv: ProService,
    private token :TokenService,
    private imgS :ImgService
  ) {}

  img :string = '';

  nombre :string = '';
  descripcion :string = '';
  demo :string = '';
  repo :string = '';

  lista :Proyectos[] = [];

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
    let item = new Proyectos(this.nombre, this.imgS.url, this.demo, this.repo, this.descripcion);

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
    this.serv.getProyectos().subscribe(data => this.lista = data);
  }

  mostrarDescripcion(txt? :String) {
    console.log(txt);
  }

  uploadImg($event :any) {
    const NAME = this.imgS.filePath("PRO_");
    this.imgS.uploadImage($event, NAME);
  }
}

