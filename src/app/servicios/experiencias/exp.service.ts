import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencias } from 'src/app/modelos/Experiencias.model';

@Injectable({
  providedIn: 'root'
})
export class ExpService {

  constructor(private http: HttpClient) { }

  URL = 'http://localhost:8080/per';

  public getExperiencia() : Observable<Experiencias[]> {
    return this.http.get<Experiencias[]>(this.URL + '/exp/getAll');
  }
}
