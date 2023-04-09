import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/modelos/Persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isLogged = false;

  constructor (
    private router :Router, 
    private token :TokenService,
    private personaServ: PersonaService
    ) 
  {}

  persona :Persona = new Persona();

  ngOnInit(): void {
    this.personaServ.getPersona(1).subscribe(data => {
      this.persona = data;
    });

    if (this.token.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public onLogOut() :void {
    this.token.logOut();
    window.location.reload();
  }

  public login() {
    this.router.navigate(['/login']);
  }

  public form() {
    this.router.navigate(['/forms/persona'])
  }

}
