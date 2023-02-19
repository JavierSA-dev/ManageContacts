import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './model/usuario'
;
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) {  }

  login(usuario: Usuario){
    console.log(usuario);
    
    return this.http.post(`http://apirestcontactos.localhost/login`, usuario);
  }
}
