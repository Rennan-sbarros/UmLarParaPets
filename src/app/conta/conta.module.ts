import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MensagemModule } from '../shared/componentes/mensagem/mensagem.module';
import { LoginComponent } from './login/login.component';
import { NovoUsuarioComponent } from './novo-usuario/novo-usuario.component';

@NgModule({
  declarations: [
    LoginComponent,
    NovoUsuarioComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MensagemModule,
    RouterModule
  ]
})
export class ContaModule { }
