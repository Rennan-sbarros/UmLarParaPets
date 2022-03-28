import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from '../shared/angular-material/angular-material.module';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    AngularMaterialModule
  ],
  exports: [HeaderComponent, FooterComponent]
})
export class ContainerModule { }
