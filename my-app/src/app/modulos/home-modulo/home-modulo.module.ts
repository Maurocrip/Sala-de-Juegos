import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModuloRoutingModule } from './home-modulo-routing.module';
import { HomeModuloComponent } from './home-modulo.component';


@NgModule({
  declarations: [
    HomeModuloComponent
  ],
  imports: [
    CommonModule,
    HomeModuloRoutingModule
  ]
})
export class HomeModuloModule { }
