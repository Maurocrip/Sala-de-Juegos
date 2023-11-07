import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CartasService } from 'src/app/servicios/cartas.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrls: ['./mayor-menor.component.css']
})
export class MayorMenorComponent implements OnInit
{
  public puntos : number = 0;
  public cartaActual : Carta = new Carta;
  public cartaPosterior : Carta = new Carta;
  public fotoAtras : string = "";
  public boton : string = "Empezar";
  public mostrar : boolean = true;
  public mensaje : string = "";
  @ViewChild('resultado') resultado!: ElementRef;

  constructor( public servicioCartas : CartasService){}
  
  ngOnInit() {
    this.servicioCartas.Empezar();
  }

  Chequear()
  {
    let resultado ="Empate";
    if(this.cartaPosterior.valor < this.cartaActual.valor)
    {
      resultado ="Es menor";
    }
    else if(this.cartaPosterior.valor > this.cartaActual.valor)
    {
      resultado ="Es mayor";
    }
    return resultado;
  }
  
  Mayor()
  {
    let mensaje = this.Chequear();
    if(mensaje != "Es menor")
    {
      this.CambiarCartas();
    }
    else
    {
      mensaje = this.Perdiste(mensaje);
    }
    this.mensaje = mensaje;
  }

  Menor()
  {
    let mensaje = this.Chequear();
    if(mensaje != "Es mayor")
    {
      this.CambiarCartas();
    }
    else
    {
      mensaje = this.Perdiste(mensaje);
    }
    this.mensaje = mensaje;
  }
  
  Perdiste(mensaje : string) : string
  {
    mensaje = "Perdiste!! " + mensaje;
    this.servicioCartas.Empezar();
    this.fotoAtras = this.cartaPosterior.foto;
    this.mostrar = true;
    this.resultado.nativeElement.style.color = "#740c0c";
    return mensaje;
  }

  Empezar()
  { 
    this.puntos = 0;
    this.mensaje = "";
    this.cartaActual.foto = "";
    this.TraerAmbasCarta();
    this.mostrar = false;
    this.boton = "reintentar";
    this.fotoAtras = "https://deckofcardsapi.com/static/img/back.png";
  }

  TraerCarta()
  {
    let consulta = this.servicioCartas.TraerCartas(1);
    consulta.subscribe( (mazo : any) => {
      this.cartaPosterior.foto = mazo.cards[0].image;
      this.AsignarValor(mazo.cards[0].value, this.cartaPosterior);
    })
  }

  TraerAmbasCarta()
  {
    let consulta = this.servicioCartas.TraerCartas(2);
    consulta.subscribe( (mazo : any) => {
      this.cartaActual.foto = mazo.cards[0].image;
      this.cartaPosterior.foto = mazo.cards[1].image;
      this.AsignarValor(mazo.cards[0].value, this.cartaActual);
      this.AsignarValor(mazo.cards[1].value, this.cartaPosterior);
    })
  }
  
  AsignarValor(tipo : string, carta : Carta)
  {
    switch (tipo)
      {
        case "ACE":
          carta.valor = 1;
        break;
        case "JACK":
          carta.valor = 11;
        break;
        case "QUEEN":
          carta.valor = 12;
        break;
        case "KING":
          carta.valor = 13;
        break;
        default:
          carta.valor = parseInt(tipo);
        break;
      }
  }

  CambiarCartas()
  {
    this.resultado.nativeElement.style.color = "lime";
    this.puntos ++;
    this.cartaActual.valor = this.cartaPosterior.valor;
    this.cartaActual.foto = this.cartaPosterior.foto;
    this.TraerCarta();
  }
}

export class Carta{
  public valor : number;
  public foto : string;
  constructor( valor : number = 0 ,foto : string ="")
  {
    this.valor = valor;
    this.foto = foto ;
  }
}
