import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../modelos/Persona.model';
import { UrlService } from './http/url.service';

@Injectable({
  providedIn: 'any'
})

export class PersonaService {

  constructor(
    private http: HttpClient,
    private url: UrlService
    ) { };

  public getPersona(id :number) :Observable<Persona> {
    return this.http.get<Persona>(this.url.URL + `/get/${id}`);
  }

  public exist(id :number) :Observable<boolean> {
    return this.http.get<boolean>(this.url.URL + `/exist/${id}`);
  }

  public save(persona :Persona) :Observable<any> {
    return this.http.post<any>(this.url.URL + '/save', persona);
  }

  public edit(persona :Persona) :Observable<any> {
    return this.http.post<any>(this.url.URL + '/edit', persona);
  }

  public delete(id? :number) :Observable<any> {
    return this.http.delete<any>(this.url.URL + `/delete/${id}`);
  }
}
