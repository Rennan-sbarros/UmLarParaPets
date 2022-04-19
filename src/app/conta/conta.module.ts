import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MensagemModule } from '../shared/componentes/mensagem/mensagem.module';
import { FormsModule } from '@angular/forms';
import { NovoUsuarioComponent } from './login/novo-usuario/novo-usuario.component';

@NgModule({
  declarations: [
    LoginComponent,
    NovoUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MensagemModule,
  ]
})
export class ContaModule { }
