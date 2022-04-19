import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  urlLogin = `${API}/user/login`

  constructor(
    private httpClient: HttpClient
  ) { }

  autenticar(usuario: string, senha: string): Observable<any>{
    return this.httpClient.post(this.urlLogin, {
      userName: usuario,
      password: senha,
    })
  }
}
