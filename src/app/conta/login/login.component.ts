import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private authSerivce: AutenticacaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login(){
    this.authSerivce.autenticar(this.usuario, this.senha).subscribe(
      () => {
      this.router.navigate(['animais']);
      },
      (error) => {
        alert("Usuário ou senha inválidos");
        console.log(error);
      }
    );
  }
}