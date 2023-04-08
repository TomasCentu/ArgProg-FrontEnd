import { HttpEvent, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../token/token.service";

@Injectable ({
  providedIn: 'root'
})

export class InterceptorServ {
  constructor(private token :TokenService){}

  public intercept(req :HttpRequest<any>, next :HttpHandler) :Observable<HttpEvent<any>> {
    let intReq = req;

    const TOKEN = this.token.getToken();

    if (TOKEN != null) {
      intReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer' + TOKEN)
      });
    }

    return next.handle(intReq);
  }
}

export const InterceptorProvider = [{
  provide: HTTP_INTERCEPTORS,
  useClass: InterceptorServ,
  multi: true
}];
