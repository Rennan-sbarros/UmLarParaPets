import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { ContainerComponent } from './container.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    HeaderComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ContainerComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ContainerModule { }
