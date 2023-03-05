import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/Persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  constructor (
    private personaServ: PersonaService
  ) {}

  public persona: Persona = new Persona('','','','','',[],[],[],[]);

  ngOnInit(): void {
    this.personaServ.getPersona().subscribe(data => this.persona = data);
  }

  public idEstudios = this.persona.estudios;
  public idExperiencias = this.persona.experiencias;
  public idHabilidades = this.persona.habilidades;
  public idProyectos = this.persona.proyectos;

}
