import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/Persona.model';
import { ImgService } from 'src/app/servicios/imgServ/img.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.scss']
})

export class FormPersonaComponent implements OnInit {

  constructor(
    private serv: PersonaService,
    private token: TokenService,
    private imgS: ImgService
  ) { }

  ngOnInit(): void {
    this.serv.exist(1).subscribe(data => this.existe = data);

    this.cargar();

    if (this.token.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  per: Persona = new Persona();

  existe: boolean = false;
  isLogged: boolean = false;

  save(): void {
    let persona = new Persona(this.per.nombre, this.per.cargo, this.imgS.perfil, this.per.sobreMi, this.imgS.banner);

    this.serv.save(persona).subscribe(() => {
      try {
        alert("Guardado con exito");
        this.cargar()
      } catch (error) {
        console.log(error);
      }
    });
  }

  edit(): void {

    let persona = new Persona(this.per.nombre, this.per.cargo, this.imgS.perfil, this.per.sobreMi, this.imgS.banner);
    persona.id = 1;

    this.serv.edit(persona).subscribe(() => {
      try {
        alert("Editado con exito");
        console.log(persona)
        this.cargar()
      } catch (error) {
        console.log(error);
      }
    });
  }

  uploadBanner($event: any) {
    const NAME = "banner";
    this.imgS.uploadImage($event, NAME);
  }

  uploadImg($event: any) {
    const NAME = "perfil";
    this.imgS.uploadImage($event, NAME);
  }

  cargar() {
    this.serv.getPersona(1).subscribe(data => {
      this.per = data;
    });
  }
}
