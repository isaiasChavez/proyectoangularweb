import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  existe(correo: string, password: string) {
    console.log("entrando al serivicio existe")
    return this.http.get(`${environment.API_URI}/profesores/${correo}/${password}`);
  }
  crear(profesor:any){
    
  }
}
