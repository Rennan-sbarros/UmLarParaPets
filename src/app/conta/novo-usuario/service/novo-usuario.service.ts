import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { NovoUsuario } from '../novo-usuario';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {
  urlSignup = `${API}/user/signup`

  constructor(
    private http: HttpClient
  ) { }

  cadastrarNovoUsuario(novoUsuario: NovoUsuario){
    return this.http.post(this.urlSignup, novoUsuario)
  }
}
