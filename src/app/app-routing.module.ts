import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { guardLogueoGuard } from './guards/guard-logueo.guard';
const routes: Routes = [

  {path: 'juegos', loadChildren: () => import('src/app/modulos/juegos-rutas/juegos-rutas-routing.module').then(m => m.RutasJuegosModule), canActivate: [guardLogueoGuard], },
  {path: 'home', loadComponent: () => import('src/app/Page/home/home.component').then(m => m.HomeComponent), canActivate: [guardLogueoGuard],},
  {path: 'login', loadComponent: () => import('src/app/Page/login/login.component').then(m => m.LoginComponent)  },
  {path: 'registro', loadComponent: () => import('src/app/Page/registro/registro.component').then(m => m.RegistroComponent)  },
  {path: 'quienSoy', loadComponent: () => import('src/app/Page/quien-soy/quien-soy.component').then(m => m.QuienSoyComponent)  },
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  {path: '**', loadComponent: () => import('src/app/components/error/error.component').then(m => m.ErrorComponent)  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
