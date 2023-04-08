import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  TOKEN = 'AuthToken';
  USERNAME_KEY = 'AuthUsername';
  AUTHORITIES_KEY = 'AuthAuthorities';
  roles: Array<string> = [];

  constructor() { }

  public setToken(token :string) :void {
    window.sessionStorage.removeItem(this.TOKEN);
    window.sessionStorage.setItem(this.TOKEN, token);
  }

  public getToken() :string {
    return sessionStorage.getItem(this.TOKEN)!;
  }

  public setUsername(nombre :string) :void {
    window.sessionStorage.removeItem(this.USERNAME_KEY);
    window.sessionStorage.setItem(this.USERNAME_KEY, nombre);
  }

  public getUsername() :string {
    return sessionStorage.getItem(this.USERNAME_KEY)!;
  }

  public setAuthorities(authorities :string[]) :void {
    window.sessionStorage.removeItem(this.AUTHORITIES_KEY);
    window.sessionStorage.setItem(this.AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities() :string[] {
    this.roles = [];

    if (sessionStorage.getItem(this.AUTHORITIES_KEY)) {
      JSON.parse(sessionStorage.getItem(this.AUTHORITIES_KEY)!).forEach((authorities: { authority: string; }) => {
        this.roles.push(authorities.authority)
      });
    }
    return this.roles;
  }

  public logOut() :void {
    window.sessionStorage.clear();
  }
}
