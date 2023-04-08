import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/modelos/Proyectos.model';
import { ProService } from 'src/app/servicios/proyectos/pro.service';

@Component ({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})

export class ProyectosComponent implements OnInit {

  constructor (
    private serv :ProService,
  ) {}

  proyectos :Proyectos[] = [];

  ngOnInit(): void {
    this.serv.getProyectos().subscribe(data => this.proyectos = data);
  }

  public descripcion(txt? :String) {
    console.log(txt);
  }
}
