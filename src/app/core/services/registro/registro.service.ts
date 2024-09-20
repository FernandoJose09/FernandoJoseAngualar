import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { auth } from 'src/app/global/endpoints';
import { registroRequest, registroResponse } from 'src/app/core/models/registro'

@Injectable({
  providedIn: 'root',
})
export class RegistroService {
  private headers: HttpHeaders;
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders ({})
  }

  registro(registro:registroRequest): Observable<registroResponse> {
    const httpOptions = {headers:this.headers}
    return this.http.post<registroResponse>(registro.registro, registro, httpOptions)
    .pipe(
      map(res => {
        return res;
      })
    )
  }
}