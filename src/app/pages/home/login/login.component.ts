import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = '';
  senha = '';

  constructor(
    private authSerivce: AutenticacaoService
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authSerivce.autenticar(this.usuario, this.senha).subscribe(
      () => {
      console.log("autenticado com sucesso");
      },
      (error) => {
        alert("Usuário ou senha inválidos");
        console.log(error);
      }
    );
  }
}
