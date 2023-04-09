import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-header-datos',
  templateUrl: './header-datos.component.html',
  styleUrls: ['./header-datos.component.scss']
})
export class HeaderDatosComponent {

  constructor(private router :Router) {}

  inicio() {
    this.router.navigate(['inicio']);
  }
}
