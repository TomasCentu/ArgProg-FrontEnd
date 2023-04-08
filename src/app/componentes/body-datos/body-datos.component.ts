import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-body-datos',
  templateUrl: './body-datos.component.html',
  styleUrls: ['./body-datos.component.scss']
})
export class BodyDatosComponent implements OnInit{

  constructor(
    private router :Router, 
    private route :ActivatedRoute, 
    private token :TokenService) {}

    isLogged = false;

  ngOnInit(): void {

    if (this.token.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cambioForm(number: number) {

    switch (number) {
      case 1:
        this.router.navigate(['persona'], {relativeTo : this.route});
        break;
      case 2:
        this.router.navigate(['estudio'], {relativeTo : this.route});
        break;
      case 3:
        this.router.navigate(['experiencia'], {relativeTo : this.route});
        break;
      case 4:
        this.router.navigate(['habilidad'], {relativeTo : this.route});
        break;
      case 5:
        this.router.navigate(['proyecto'], {relativeTo : this.route});
        break;
    }
  }

}
