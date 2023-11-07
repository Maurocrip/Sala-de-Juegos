import { Component } from '@angular/core';
import { NavtabService } from './servicios/navtab.service';
import { BaseDatosService } from './servicios/base-datos.service';
import Swal from 'sweetalert2';
import { ErroresService } from './servicios/errores.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  constructor(private router: Router, private servicio : NavtabService, private firebase : BaseDatosService, private errorService: ErroresService){}
  
  get perfil()
  {
    return this.servicio.usuarioDisponible;
  }
  
  logOut()
  {
    Swal.fire({
      title: 'Seguro queres cerrar secion?',
      text: "no es reversible!",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Quiero irme!'
    })
    .then((result) => 
    {
      if (result.isConfirmed) 
      {
        this.firebase.DesLogueo()
        .then(()=>
        {
          Swal.fire("Cerraste secion","Espero q vuelvas :(","success");
          this.servicio.usuarioDisponible = false;
          this.router.navigate(['login']);
        })
        .catch((error)=>
        {
          this.errorService.MostrarError(error.code);
        })
      }
    })
  }
}