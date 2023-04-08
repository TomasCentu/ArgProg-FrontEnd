import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidades } from 'src/app/modelos/Habilidades.model';
import { UrlService } from '../http/url.service';

@Injectable({
  providedIn: 'any'
})
export class HabService {

  constructor(private http: HttpClient, private url: UrlService) { }

  URL = this.url.URL + '/hab';

  public getHabilidades() : Observable<Habilidades[]> {
    return this.http.get<Habilidades[]>(this.URL + '/getAll');
  }

  public save(habilidad :Habilidades) :Observable<any> {
    return this.http.post<any>(this.URL + '/save', habilidad);
  }

  public delete(id :number) :Observable<any> {
    return this.http.delete<any>(this.URL + `/delete/${id}`);
  }
}
