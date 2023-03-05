import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from 'src/app/modelos/Estudios.model';

@Injectable({
  providedIn: 'root'
})

export class EstService {

  constructor(private http: HttpClient) { }

  URL = 'http://localhost:8080/per';

  public getEstudio() : Observable<Estudios[]> {
    return this.http.get<Estudios[]>(this.URL + '/est/getAll');
  }
}
