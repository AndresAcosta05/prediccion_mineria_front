import { Injectable } from '@angular/core';
import { LoginI } from 'src/app/models/login.interface';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RegistroI } from 'src/app/models/registro.interface';
import { prediccionI } from 'src/app/models/prediccion.interface';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string ="http://127.0.0.1:5000/";

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
    ) {}

    loginByEmail(form:LoginI):Observable<LoginI>{
    let direccion = this.url + "user/login";
    return this.http.post<LoginI>(direccion, form);
    } 

    postUsuarios(form:RegistroI):Observable<RegistroI>{
      let direccion = this.url + "/user/insert";
      return this.http.post<RegistroI>(direccion,form);
    }

    postPrediccion(form:prediccionI):Observable<prediccionI>{
      let direccion = this.url + "/prediction/predict";
      return this.http.post<prediccionI>(direccion,form);
    }
  }

