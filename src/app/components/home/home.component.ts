import { Component } from '@angular/core';
import { NavtabService } from 'src/app/servicios/navtab.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  public juegos : Array<any> = [
    {
      path: 'MayorMenor',
      name: 'Mayor o menor',
      image: '../../../../assets/cartas.png',
      description: 'El objetivo del juego es adivinar si la siguiente carta que se sacará será mayor o menor a la anteriormente sacada.'    
    },
    {
      path: 'ahorcado',
      name: 'Ahorcado',
      image: '../../../../assets/ahorcado.png',
      description: 'El objetivo del juego es adivinar la palabra incognita antes de perder todas las vidas.'    
    },
    {
      path: 'preguntados',
      name: 'Preguntados',
      image: '../../../../assets/trivia.jpg',
      description: 'Trivia sobre videojuegos.'    
    },
    {
      path: 'blackJack',
      name: 'BlackJack',
      image: '../../../../assets/blackjack.jpg',
      description: 'El objetivo del juego es obtener 21 puntos o lo mas cerca, plantarse y ganarle a la maquina.'    
    }

  ]
  constructor(private global : NavtabService){}
  get tiempoDeLogue()
  {
    return this.global.tiempoDeLogue;
  }
  get perfil()
  {
    return this.global.usuarioDisponible;
  }
  get usuario()
  {
    return this.global.usuarioNombre;
  }
}
