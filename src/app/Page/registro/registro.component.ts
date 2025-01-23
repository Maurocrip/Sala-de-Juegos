import { Component, ViewEncapsulation } from '@angular/core';
import Swal from 'sweetalert2';
import {BaseDatosService} from '../../servicios/base-datos.service'
import { NavtabService } from '../../servicios/navtab.service';
import { ErroresService } from 'src/app/servicios/errores.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    HttpClientModule,
  ],
})
export class RegistroComponent {

  private flag : boolean = true;
  public email : string = "";
  public usuario : string = "";
  public pasword: string = "";

  constructor( private baseDatos : BaseDatosService, private global : NavtabService, private errorService: ErroresService) {
    console.log("cargar componente login")
   }

  registrar()
  {
    if(this.usuario == "" || this.usuario.includes(" "))
    {
      Swal.fire("CUIDADO!!","Falta Usario, o el usuario contien espacios","warning");
    }
    else
    { 
      this.baseDatos.TraerUsarios().subscribe((respuesta)=>
      {
        for(let i =0; i<respuesta.length;i++)
        {
          if(respuesta[i]["Usuario"] == this.usuario)
          {
            this.flag = false;
            Swal.fire({icon:"error",text:"El usuario ya existe", title:"Lo sentimos"});
            break;
          }
        }
  
        if(this.flag)
        {
          this.baseDatos.RegistrarUsuario(this.email, this.pasword)
          .then(() => 
          {
            this.baseDatos.GuardarUsuario(this.usuario,this.email);
            this.global.RegistroLogueo("Felisidades","ya has sido registrado");
            this.global.usuarioNombre = this.usuario;
          })
          .catch((error) => 
          {
            this.errorService.MostrarError(error.code);
          });
        }
        else
        {
          this.flag = true;
        }

      });
    }
  }
}
 
