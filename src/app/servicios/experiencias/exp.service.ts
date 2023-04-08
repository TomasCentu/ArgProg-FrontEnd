import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencias } from 'src/app/modelos/Experiencias.model';
import { UrlService } from '../http/url.service';

@Injectable({
  providedIn: 'any'
})
export class ExpService {

  constructor(private http: HttpClient, private url: UrlService) { }

  URL = this.url.URL + '/exp';

  public getExperiencias() : Observable<Experiencias[]> {
    return this.http.get<Experiencias[]>(this.URL + '/getAll');
  }

  public save(experiencia :Experiencias) :Observable<any> {
    return this.http.post<any>(this.URL + '/save', experiencia);
  }

  public delete(id :number) :Observable<any> {
    return this.http.delete<any>(this.URL + `/delete/${id}`);
  }
}
