import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/conta/login/login.component';
import { NovoUsuarioComponent } from 'src/app/conta/novo-usuario/novo-usuario.component';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'novo-usuario',
        component: NovoUsuarioComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
