import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from "@angular/common/http";

import { Observable, throwError } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";

@Injectable()
export class httpInterceptor implements HttpInterceptor {
  constructor(
    private spinner: NgxSpinnerService,
    ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = this.setHeaderEnvMode(request);
    console.log(request)
    this.spinner.show() 

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.spinner.hide();
        }
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        this.spinner.hide();
        let data = {};
        data = {
          status: error.status,
          message: error.message,
          headers: error.headers
        };
        console.log(data);

        return throwError(error);
      })
    );
  }

  setHeaderEnvMode(request) {
    if (localStorage.getItem("access_token")) {
      return request.clone({
        headers: request.headers
          .set("Content-Type", "application/json")
          .set(
            "app-meta",
           '{"request_datetime":"15-10-2019 10:20:01","user_id":"00u6ilmamt8vjhaGW0h7","user_name":"pccalphasvc@tisco.co.th","log_session_id":"60d6aacc-44ba-4bde-824d-4e9ada561fd0"}'
          )
      });
    } else {
      return request.clone({
        headers: request.headers.set("Content-Type", "application/json")
        .set(
          "app-meta",
         '{"request_datetime":"15-10-2019 10:20:01","user_id":"00u6ilmamt8vjhaGW0h7","user_name":"pccalphasvc@tisco.co.th","log_session_id":"60d6aacc-44ba-4bde-824d-4e9ada561fd0"}'
        ),
        // withCredentials: true 
      });
    }
  }
}
