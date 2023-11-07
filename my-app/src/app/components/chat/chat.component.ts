import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BaseDatosService } from 'src/app/servicios/base-datos.service';
import { NavtabService } from 'src/app/servicios/navtab.service';
import { onSnapshot, query, orderBy } from "firebase/firestore";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit{

  public arrayMensajes : Array<any> = [];
  public textBox : string ="";
  @ViewChild('chat') chat!: ElementRef;

  constructor(public global : NavtabService, private baseDeDatos : BaseDatosService){}
  
  ngOnInit(): void {
    const q = query(this.baseDeDatos.colMensajes, orderBy("Fecha", "asc"));
    onSnapshot(q, (respuesta) => 
    {
      respuesta.docChanges().forEach((change) => {
          this.arrayMensajes.push(change.doc.data());
          this.scrollToBottom();
      });
    });
  }

  verifica()
  {
    this.baseDeDatos.GuardarMensajes(this.textBox, this.global.usuarioNombre, this.global.DarFechaActual());
    this.textBox = "";
  }

  scrollToBottom() {    
    if (this.chat) {       
      const element = this.chat.nativeElement;
      element.scrollTop = element.scrollHeight;
    }
  }
}
