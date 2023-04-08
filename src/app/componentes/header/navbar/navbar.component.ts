import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/servicios/token/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  isLogged = false;

  constructor (private router :Router, private token :TokenService) {}

  ngOnInit(): void {
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
