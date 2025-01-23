import { Injectable } from '@angular/core';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { getAuth, createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, collection } from 'firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {

  readonly auth = getAuth();
  readonly colUsuarios = collection(this.firestore, 'usuarios');
  readonly colLogins = collection(this.firestore, 'registroLogins');
  readonly colMensajes = collection(this.firestore, 'mensajes');

  constructor(public firestore: Firestore) {}
  
  TraerUsarios()
  { 
    return collectionData(this.colUsuarios);
  }

  //----------------------------------Guardar en BD----------------------------------------------------------------------------------------------- 
  GuardarMensajes(mensaje : string, usuario : string, fecha : string) : void
  {
    const documento = doc(this.colMensajes);
    setDoc(documento,{Usuario: usuario, Mensaje: mensaje, Fecha: fecha})
  }

  GuardarUsuario(usuario : string, email : string) : void
  {
    const documento = doc(this.colUsuarios);
    const id = documento.id;
    setDoc(documento,{Usuario: usuario, Email: email, Id: id})
  }
  
  GuardarLogins(usuario : string, momentoLogueado : string) : void
  {
    const documento = doc(this.colLogins);
    const id = documento.id;
    setDoc(documento,{Usuario: usuario, Fecha: momentoLogueado, Id: id})
  }

  //----------------------------------Registro y logueo------------------------------------------------------------------------------------------- 
  RegistrarUsuario( email : string, pasword: string)
  {
    return createUserWithEmailAndPassword(this.auth, email, pasword)
  }
  
  LogIn(email : string, pasword: string)
  {
    return signInWithEmailAndPassword(this.auth, email, pasword);
  }
  
  DesLogueo()
  {
    return signOut(this.auth);
  }

}
