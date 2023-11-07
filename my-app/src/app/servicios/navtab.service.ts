import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { BaseDatosService } from './base-datos.service';

@Injectable({
  providedIn: 'root'
})
export class NavtabService {
  public usuarioDisponible: boolean = false;
  public tiempoDeLogue : string = "";
  public usuarioNombre : string = "";
  constructor(private router: Router, private firebase : BaseDatosService) {}

  RegistrarTiempo() :  string
  {
    this.tiempoDeLogue = this.DarFechaActual()
    return this.tiempoDeLogue;
  }

  DarFechaActual() :  string
  {
    let dia : Date = new Date();
    return dia.getDate() +"/"+ dia.getMonth() +"/"+ dia.getFullYear() + " " + dia.getHours() +":"+ dia.getMinutes() +":"+ dia.getSeconds();
  }

  RegistroLogueo(titulo : string, comentario : string)
  {
    Swal.fire(titulo,comentario,"success");
      this.router.navigate(['home']);
      this.usuarioDisponible = true;
      this.firebase.GuardarLogins(this.usuarioNombre,this.RegistrarTiempo());
  }
}
