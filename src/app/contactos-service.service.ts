import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacto } from './model/contacto';
@Injectable({
  providedIn: 'root'
})
export class ContactosServiceService {

  constructor(private http: HttpClient) { }

  getContactos(): Observable<Contacto[]> {
    const token = localStorage.getItem('token');

    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + token
      }),
    };

    return this.http.get<Contacto[]>("http://apirestcontactos.localhost/contactos", httpOptions)


  }

  getContacto(id:any): Observable <any> {
   
    return this.http.get<Contacto>(`http://apirestcontactos.localhost/contacto/${id}`)

  }

  addContacto(contacto: Contacto) {
  
    return this.http.post(`http://apirestcontactos.localhost/contacto`, contacto);
  }

  updateContacto(contacto: Contacto) {
    return this.http.put(`http://apirestcontactos.localhost/contacto/${contacto.id}`, contacto);
  }

  deleteContacto(id: number) {
    return this.http.delete(`http://apirestcontactos.localhost/contacto/${id}`);
  }
  
}
