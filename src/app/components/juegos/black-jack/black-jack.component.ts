import { Component, ElementRef, ViewChild } from '@angular/core';
import { CartasService } from 'src/app/servicios/cartas.service';
import { Carta } from 'src/app/components/juegos/mayor-menor/mayor-menor.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-black-jack',
  templateUrl: './black-jack.component.html',
  styleUrls: ['./black-jack.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class BlackJackComponent {
 
  public arrayCartasMia : Array<Carta> =[];
  public arrayCartasPc : Array<Carta> =[];

  public puntos : number = 0;
  public boton : string = "Empezar";
  public mostrar : boolean = true;
  public terminar : boolean = true;
  public mensaje : string = "";
  @ViewChild('resultado') resultado!: ElementRef;

  constructor( public servicioCartas : CartasService){}
  
  ngOnInit() {
    this.servicioCartas.Empezar();
  }

  async Plantarse()
  {
    let total : number = this.ValorTotal(this.arrayCartasPc);
    await this.TraerAmbasCarta(this.arrayCartasPc);
    while(total < this.ValorTotal(this.arrayCartasMia))
    {
      await this.TraerCarta(this.arrayCartasPc);
      total = this.ValorTotal(this.arrayCartasPc);
    }
    if(total<=21)
    {
      this.Perdiste();
    }
    else
    {
      this.puntos++;
      this.mensaje = "Ganaste!!" 
      this.resultado.nativeElement.style.color = "lime";
      this.servicioCartas.Empezar();
      this.terminar = false;
    }
  }

  async Pedir()
  {
    await this.TraerCarta(this.arrayCartasMia);
    if(this.ValorTotal(this.arrayCartasMia)>21)
    {
      this.Perdiste();
    };
  }
  
  ValorTotal(array :Array<Carta>) : number
  {
    let retorno : number = 0;
    for(let carta of array)
    {
      retorno += carta.valor;
    }
    return retorno
  }

  Perdiste()
  {
    this.mensaje = "Perdiste!!" 
    this.mostrar = true;
    this.resultado.nativeElement.style.color = "#740c0c";
    this.servicioCartas.Empezar();
  }

  Continuar()
  {
    this.terminar = true;
    this.Empezar();
  }

  EmpezarJuego()
  {
    this.puntos = 0;
    this.Empezar();
  }

  async Empezar()
  { 
    this.mensaje = "";
    this.arrayCartasMia = [];
    this.arrayCartasPc = [];
    await this.TraerAmbasCarta(this.arrayCartasMia);
    this.mostrar = false;
    this.boton = "reintentar";
  }

  TraerCarta(array :Array<Carta>)
  {
    return new Promise((resolve,reject) =>{
      let carta : Carta = new Carta();

      let consulta = this.servicioCartas.TraerCartas(1);
      consulta.subscribe((mazo : any) => 
      {
        carta.foto = mazo.cards[0].image;
        this.AsignarValor(mazo.cards[0].value, carta);
        array.push(carta);
        resolve("");
      })
    })
  }

  TraerAmbasCarta(array :Array<Carta>)
  {
    return new Promise((resolve,reject) =>{
      let carta1 : Carta = new Carta();
      let carta2 : Carta = new Carta();

      let consulta = this.servicioCartas.TraerCartas(2);
      consulta.subscribe( (mazo : any) => 
      {
        carta1.foto = mazo.cards[0].image;
        carta2.foto = mazo.cards[1].image;
        this.AsignarValor(mazo.cards[0].value, carta1);
        this.AsignarValor(mazo.cards[1].value, carta2);
        array.push(carta1,carta2);
        resolve("");
      })
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
      case "QUEEN":
      case "KING":
        carta.valor = 10;
      break;
      default:
        carta.valor = parseInt(tipo);
      break;
    }
  }
}

