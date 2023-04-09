import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/modelos/Persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component ({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})

export class PersonaComponent implements OnInit {

  constructor (
    private personaServ: PersonaService
  ) {}

  persona: Persona = new Persona();

  ngOnInit(): void {
    this.personaServ.getPersona(1).subscribe(data => {
      this.persona = data;
    });
  }
}
