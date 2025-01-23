import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModuloComponent } from './home-modulo.component';
import { HomeComponent } from '../../components/home/home.component';
import { AhorcadoComponent } from 'src/app/components/juegos/ahorcado/ahorcado.component';
import { MayorMenorComponent } from 'src/app/components/juegos/mayor-menor/mayor-menor.component';
import { PreguntadosComponent } from 'src/app/components/juegos/preguntados/preguntados.component';
import { BlackJackComponent } from 'src/app/components/juegos/black-jack/black-jack.component';

const routes: Routes = [
  { path: '', component: HomeModuloComponent,
    children : [
      {path: '', component: HomeComponent,},
      {path: 'MayorMenor', component: MayorMenorComponent},
      {path: 'ahorcado', component: AhorcadoComponent},
      {path: 'preguntados', component: PreguntadosComponent},
      {path: "blackJack", component: BlackJackComponent}
    ]    
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeModuloRoutingModule { }
