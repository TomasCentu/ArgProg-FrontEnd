import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/Persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(
    private http: HttpClient
    ) { }

  URL = 'http://localhost:8080/per';

  public getPersona () : Observable<Persona> {
    return this.http.get<Persona>(this.URL + '/get/1');
  }
}
