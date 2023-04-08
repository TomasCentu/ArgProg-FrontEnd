import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/modelos/Habilidades.model';
import { HabService } from 'src/app/servicios/habilidades/hab.service';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-form-hab',
  templateUrl: './form-hab.component.html',
  styleUrls: ['./form-hab.component.scss']
})
export class FormHabComponent  implements OnInit {

  constructor (
    private serv: HabService,
    private token :TokenService
  ) {}

  nombre :string = '';
  porcentaje :number = 0;

  lista :Habilidades[] = [];

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
    let item = new Habilidades(this.nombre, this.porcentaje);

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
    this.serv.getHabilidades().subscribe(data => this.lista = data);
  }
}
