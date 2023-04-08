import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudios } from 'src/app/modelos/Estudios.model';
import { UrlService } from '../http/url.service';

@Injectable({
  providedIn: 'any'
})

export class EstService {

  constructor(private http: HttpClient, private url: UrlService) { }

  URL = this.url.URL +  '/est';

  public getEstudios() : Observable<Estudios[]> {
    return this.http.get<Estudios[]>(this.URL + '/getAll');
  }

  public save(estudios :Estudios) :Observable<any> {
    return this.http.post<any>(this.URL + '/save', estudios);
  }

  public delete(id :number) :Observable<any> {
    return this.http.delete<any>(this.URL + `/delete/${id}`);
  }
}
