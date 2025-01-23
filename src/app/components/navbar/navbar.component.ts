import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Usuario from 'src/app/Interfaz/Usuario-I';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';
import { ErroresService } from 'src/app/servicios/errores.service';
import { NavtabService } from 'src/app/servicios/navtab.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { ChatComponent } from "../../Page/chat/chat.component";
import { AppRoutingModule } from 'src/app/app-routing.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, ChatComponent, AppRoutingModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
constructor(private router: Router, private global : NavtabService, private firebase : BaseDatosService, private errorService: ErroresService){}
get usuario()
  {
    return this.global.usuarioNombre;
  }
  get perfil()
  {
    return this.global.usuarioDisponible;
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
          this.global.usuarioDisponible = false;
          this.global.usuarioNombre = "";
          this.router.navigate(['login']);
          var usuario : Usuario = { Name:"",  Registrado: false }
          localStorage.setItem("UsuarioSalaJuegos", JSON.stringify(usuario))
        })
        .catch((error)=>
        {
          this.errorService.MostrarError(error.code);
        })
      }
    })
  }
}
