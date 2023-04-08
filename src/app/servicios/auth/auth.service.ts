import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { jwtDto } from 'src/app/modelos/jwt-dto';
import { NuevoUsuario } from 'src/app/modelos/NuevoUsuario';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  authURL = 'https://tomascentu-portfolio.up.railway.app/auth/';

  constructor(private http :HttpClient) { }

  public new(user :NuevoUsuario) :Observable<any> {
    return this.http.post<any>(this.authURL + 'new', user);
  }

  public login(login :NuevoUsuario) :Observable<jwtDto> {
    return this.http.post<jwtDto>(this.authURL + 'login', login);
  }
}
