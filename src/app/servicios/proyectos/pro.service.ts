import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from 'src/app/modelos/Proyectos.model';
import { UrlService } from '../http/url.service';

@Injectable({
  providedIn: 'root'
})
export class ProService {

  constructor(private http: HttpClient, private url: UrlService) { }

  URL = this.url.URL + '/pro';

  public getProyectos() : Observable<Proyectos[]> {
    return this.http.get<Proyectos[]>(this.URL + '/getAll');
  }

  public save(proyecto :Proyectos) :Observable<any> {
    return this.http.post<any>(this.URL + '/save', proyecto);
  }

  public delete(id :number) :Observable<any> {
    return this.http.delete<any>(this.URL + `/delete/${id}`);
  }
}
