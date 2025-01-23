import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';
import { ErroresService } from 'src/app/servicios/errores.service';
import { NavtabService } from 'src/app/servicios/navtab.service';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class LoginComponent implements OnInit, OnDestroy
{

  public arrayOpciones: Array<any> = [{Email: "tester1@gmail.com", Password: "123456789", Nombre: "mauroTester1"},{Email: "tester2@mail.com", Password: "123456789",Nombre: "thiagoTester2"}]
  public email : string = "";
  public pasword : string = "";
  private arrayUsuario : Array<any> = [];
  private subscription: Subscription | null = null;
  public grupo : FormGroup;

  @Output() newItemEvent = new EventEmitter<boolean>(); 

  constructor(private fb : FormBuilder, private firebase : BaseDatosService, private global : NavtabService, private errorService: ErroresService) {
    this.grupo = this.fb.group
    ({
      email : ["",[Validators.required,Validators.email]],
      pasword :["",[Validators.required]]
    });
   }
  
  ngOnInit(): void {
    this.subscription = this.firebase.TraerUsarios().subscribe(respuesta => this.arrayUsuario = respuesta);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  Completar(email : string, pasword: string)
  {
    this.email = email;
    this.pasword =pasword;
  }


  LogIn()
  {
    if(this.grupo.valid)
    {
      this.firebase.LogIn(this.email, this.pasword)
      .then(() => 
      {
        this.AplicarUsuario();
        this.global.RegistroLogueo("Bienvenido","Te has logeado");
      })
      .catch((error) => 
      {
        this.errorService.MostrarError(error.code);
      });
    }
    else
    {
      this.errorService.MostrarError("Campos Incompletos");
    }
  }

  AplicarUsuario()
  {
    for(let element of this.arrayUsuario)
    {
      if(element["Email"] == this.email)
      {
        this.global.usuarioNombre = element["Usuario"];
        break;
      }
    }
  }

}
