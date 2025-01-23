import { Component, OnInit } from '@angular/core';
import { NavtabService } from './servicios/navtab.service';
import { Router } from '@angular/router';
import Usuario from './Interfaz/Usuario-I';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  constructor(private router: Router, private global : NavtabService){}
  
  ngOnInit(): void 
  {
    var resultado : string | null = localStorage.getItem("UsuarioSalaJuegos");
    if(resultado != null)
    {
      var usuario : Usuario = JSON.parse(resultado);
        if(usuario.Registrado)
        {
          this.global.usuarioNombre = usuario.Name;
          this.global.usuarioDisponible = true;
          this.router.navigate(['/home']);
        }
        else
        {
          this.router.navigate(['/login']);
        }
    }
  }
}