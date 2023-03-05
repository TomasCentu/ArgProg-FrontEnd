import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from 'src/app/modelos/Habilidades.model';

@Injectable({
  providedIn: 'root'
})
export class HabService {

  constructor(private http: HttpClient) { }

  URL = 'http://localhost:8080/per';

  public getHabilidades() : Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(this.URL + '/hab/getAll');
  }
}
