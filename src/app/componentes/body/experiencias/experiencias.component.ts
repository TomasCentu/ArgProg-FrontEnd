import { Component, OnInit } from '@angular/core';
import { Estudios } from 'src/app/modelos/Estudios.model';
import { Experiencias } from 'src/app/modelos/Experiencias.model';
import { EstService } from 'src/app/servicios/estudios/est.service';
import { ExpService } from 'src/app/servicios/experiencias/exp.service';

@Component ({
  selector: 'app-exp-hab',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.scss']
})

export class ExperienciasComponent implements OnInit{

  constructor (
    private servEst :EstService,
    private servExp :ExpService
  ) {}

  estudio :Estudios[] = [];
  experiencia :Experiencias[] = [];

  ngOnInit(): void {
    this.servEst.getEstudios().subscribe(data => this.estudio = data);
    this.servExp.getExperiencias().subscribe(data => this.experiencia = data);
  }
}
