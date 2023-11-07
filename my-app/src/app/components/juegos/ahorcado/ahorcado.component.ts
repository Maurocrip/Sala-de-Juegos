import { Component, ElementRef, ViewChild } from '@angular/core';
import { PalabraService } from 'src/app/servicios/palabra.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent {
  
  @ViewChild('palabra') palabra!: ElementRef;
  @ViewChild('teclado') teclado!: ElementRef;
  public palabraJuego : string ="";
  public tecladoB : boolean = true;
  public boton : string = "reintentar";
  private palabraReal : string = "";
  private intentos : number = 0;
  public puntos : number = 0;
  public foto : string ="../../../../assets/ahoracado"+ this.intentos + ".jpeg";

  constructor(private servicio : PalabraService)
  {
    this.Empezar()
  }

  Reintentar()
  {
    this.puntos =0
    this.Empezar();
  }

  async Empezar()
  {
    let consulta = this.servicio.GenerarPalabra()
    consulta.subscribe(async(respuesta : any)=>
    {
      this.palabraReal = respuesta[0];
      console.log(this.palabraReal);
      if(this.palabraReal.includes("á") || this.palabraReal.includes("é") || this.palabraReal.includes("í") || this.palabraReal.includes("ó") || this.palabraReal.includes("ú"))
      {
        this.palabraReal = this.palabraReal.replaceAll("á","a");
        this.palabraReal = this.palabraReal.replaceAll("í","i");
        this.palabraReal = this.palabraReal.replaceAll("ó","o");
        this.palabraReal = this.palabraReal.replaceAll("ú","u");
        this.palabraReal = this.palabraReal.replaceAll("é","e");
      }
      this.palabraJuego = "";
      this.intentos = 0;
      this.foto = "../../../../assets/ahoracado"+ this.intentos + ".jpeg";
      this.OcultarPalabra()
      this.tecladoB = true;
      this.palabra.nativeElement.style.color = "black";
    })
  }

  async letra(letra : string)
  {
    if(this.palabraReal.includes(letra))
    {
      let simulacro : string ="";
      for (let index = 0; index < this.palabraReal.length; index++) 
      {
        if(this.palabraReal[index] == letra)
        {
          simulacro = simulacro + letra;
        } 
        else
        {
          simulacro = simulacro + this.palabraJuego[index];
        }
      }
      this.palabraJuego = simulacro;
      if(this.palabraJuego == this.palabraReal)
      {
        this.puntos ++;
        this.teclado.nativeElement.style.pointerEvents = "none";
        this.palabra.nativeElement.style.color = "green"; 
        setTimeout(async() => 
        {
          await this.Empezar();
          this.teclado.nativeElement.style.pointerEvents = "";
        }, 500);
      }
    }
    else if(this.intentos !=4)
    {
      this.intentos++;
      this.foto = "../../../../assets/ahoracado"+ this.intentos + ".jpeg";
    }
    else
    {
      this.intentos++;
      this.foto = "../../../../assets/ahoracado"+ this.intentos + ".jpeg";
      this.palabra.nativeElement.style.color = "red";
      this.palabraJuego = this.palabraReal;
      this.tecladoB = false;
    }
  }
  
  OcultarPalabra()
  {
    for (let index = 0; index < this.palabraReal.length; index++) {
      this.palabraJuego = this.palabraJuego + "?"; 
    }
  }
}
