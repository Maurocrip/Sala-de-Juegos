import { Component, EventEmitter, Output, Query } from '@angular/core';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';
import { ErroresService } from 'src/app/servicios/errores.service';
import { NavtabService } from 'src/app/servicios/navtab.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent 
{
  public email : string = "";
  public pasword : string = "";
  @Output() newItemEvent = new EventEmitter<boolean>(); 

  constructor( private firebase : BaseDatosService, private global : NavtabService, private errorService: ErroresService) { }

  Completar1()
  {
    this.email = "tester1@gmail.com";
    this.pasword ="123456789";
  }

  Completar2()
  {
    this.email = "tester2@mail.com";
    this.pasword ="123456789";
  }

  LogIn()
  {
    this.firebase.LogIn(this.email, this.pasword)
    .then(() => 
    {
      this.AplicarUsuario();
      this.global.RegistroLogueo("Bienbenido","Te has logeado");
    })
    .catch((error) => 
    {
      this.errorService.MostrarError(error.code);
    });
  }

  AplicarUsuario()
  {
    this.firebase.TraerUsarios()
    .subscribe((respuesta)=>{
      for(let element of respuesta)
      {
        if(element["Email"] == this.email)
        {
          this.global.usuarioNombre = element["Usuario"];
          break;
        }
      }
    });
  }
}
