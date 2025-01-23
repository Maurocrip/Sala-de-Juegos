import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
  {path: '', redirectTo: '/home',  pathMatch: 'full'},
  {path: 'MayorMenor', loadComponent: () => import('src/app/components/juegos/mayor-menor/mayor-menor.component').then(m => m.MayorMenorComponent)},
  {path: 'ahorcado', loadComponent: () => import('src/app/components/juegos/ahorcado/ahorcado.component').then(m => m.AhorcadoComponent)},
  {path: 'preguntados', loadComponent: () => import('src/app/components/juegos/preguntados/preguntados.component').then(m => m.PreguntadosComponent)},
  {path: "blackJack", loadComponent: () => import('src/app/components/juegos/black-jack/black-jack.component').then(m => m.BlackJackComponent)}, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RutasJuegosModule { }
