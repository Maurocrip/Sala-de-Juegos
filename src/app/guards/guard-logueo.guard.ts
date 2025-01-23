import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { BaseDatosService } from '../servicios/base-datos.service';
import { NavtabService } from '../servicios/navtab.service';

export const guardLogueoGuard: CanActivateFn = (route, state) => {
  var global = inject(NavtabService)
  if(global.usuarioDisponible)
  {
    return true;
  }
  else
  {
    var ruta = inject(Router)
    return ruta.createUrlTree(['/login']);; 
  }
};
