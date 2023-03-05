import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/modelos/Estudios.model';
import { Experiencias } from 'src/app/modelos/Experiencias.model';
import { EstService } from 'src/app/servicios/estudios/est.service';
import { ExpService } from 'src/app/servicios/experiencias/exp.service';
import { PersonaComponent } from '../../header/persona/persona.component';

@Component({
  selector: 'app-exp-hab',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss']
})

export class ExperienciasComponent implements OnInit{

  constructor (
    private servEst :EstService,
    private personaC :PersonaComponent,
    private servExp :ExpService
  ) {}

  private idPersona = this.personaC.persona.id;

  estudio :Estudios[] = [];
  experiencia :Experiencias[] = [];

  ngOnInit(): void {
    this.servEst.getEstudio().subscribe(data => this.estudio = data);
    this.servExp.getExperiencia().subscribe(data => this.experiencia = data);
  }
}
