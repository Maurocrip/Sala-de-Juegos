import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { QuienSoyComponent } from './components/quien-soy/quien-soy.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = 
[
  {path: "login", component: LoginComponent}, 
  {path: 'home', loadChildren: () => import('./modulos/home-modulo/home-modulo.module').then(m => m.HomeModuloModule) },
  {path: "quienSoy", component: QuienSoyComponent}, 
  {path: "registro", component: RegistroComponent}, 
  {path: '', redirectTo: "login", pathMatch: "full"},
  {path: "**", component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
