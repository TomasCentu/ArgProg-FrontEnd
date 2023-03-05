import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/modelos/Habilidades.model';
import { HabService } from 'src/app/servicios/habilidades/hab.service';
import { PersonaComponent } from '../../header/persona/persona.component';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})

export class HabilidadesComponent implements OnInit{
  constructor (
    private serv :HabService,
    private personaC :PersonaComponent
  ) {}

  private idPersona = this.personaC.persona.id;

  habilidades :Habilidades[] = [];

  ngOnInit(): void {
    this.serv.getHabilidades().subscribe(data => this.habilidades = data);
  }
}
