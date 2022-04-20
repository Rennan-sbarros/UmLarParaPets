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
  urlExists = `${API}/user/exists`

  constructor(
    private http: HttpClient
  ) { }

  cadastrarNovoUsuario(novoUsuario: NovoUsuario){
    return this.http.post(this.urlSignup, novoUsuario)
  }

  verificaUsuarioExistente(nomeUsuario: string){
    return this.http.get(`${this.urlExists}/${nomeUsuario}`)
  }
}
