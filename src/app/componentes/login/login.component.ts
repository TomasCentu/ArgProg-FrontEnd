import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/modelos/NuevoUsuario';
import { AuthService } from 'src/app/servicios/auth/auth.service';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  LoginUser !: NuevoUsuario;
  existe = false;

  nombre !: string;
  pass !: string;

  roles !: string[];

  errrorMsj !: string;

  constructor (
    private token :TokenService, 
    private auth :AuthService, 
    private router :Router,
    private servP :PersonaService
  ) {}

  ngOnInit(): void {
    if (this.token.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.token.getAuthorities();
    }

    this.servP.exist(1).subscribe(data => this.existe = data);
  }

  public OnLogin() :void {
    this.LoginUser = new NuevoUsuario(this.nombre, this.pass);

    try {
      this.auth.login(this.LoginUser).subscribe (
        data => {
          this.isLogged = true;
          this.isLogginFail = false;
          this.token.setToken(data.token);
          this.token.setUsername(data.nombre);
          this.token.setAuthorities(data.authorities);
          this.roles = data.authorities;

          if (this.existe) {
            this.router.navigate(['inicio']);
          } else {
            this.router.navigate(['forms/persona']);
          }
        }
      );
    } catch(err :any) {
      this.isLogged = false;
      this.isLogginFail = true;
      this.errrorMsj = err.error.mensaje;
    }
  }

}
