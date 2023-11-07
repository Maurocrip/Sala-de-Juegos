import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ErroresService {

  constructor() { }

  MostrarError(codigoError : string)
  {
    switch(codigoError)
    {
      case "auth/invalid-email": 
      Swal.fire({text :"No tiene el formato email (ejemplo@gmail.com)", icon:"warning", title: "EL IMAIL!!"});
      break;

      case "auth/email-already-in-use": 
        Swal.fire({text :"El mail ya existe", icon:"error", title: "Lo sentimos"});
      break;

      case "auth/weak-password": 
        Swal.fire({text :"La contraseña debe de tener mas de 6 caracteres", icon:"warning", title: "CONTRASEÑA INSEGURA!!"});
      break;

      case "auth/missing-password": 
        Swal.fire({text :"Falta la contraseña", icon:"warning", title: "CUIDADO!!"});
      break;

      case "auth/invalid-login-credentials": 
      Swal.fire({text :"No existe ese ususario", icon:"error", title: "Registrate"});
      break;

      default:
        Swal.fire({text :"Descuida no es tu culpa", icon:"error", title: "ERROR NO REGISTRADO!!"});
        console.log(codigoError);
      break;
    }
  }
}
