import JuegosDescripcion from "../Interfaz/Juegos-I";

export let listaJuegos :  Array<JuegosDescripcion> = [
    {
      path: '/juegos/MayorMenor',
      name: 'Mayor o menor',
      image: '../../../../assets/cartas.png',
      description: 'El objetivo del juego es adivinar si la siguiente carta que se sacará será mayor o menor a la anteriormente sacada.'    
    },
    {
      path: '/juegos/ahorcado',
      name: 'Ahorcado',
      image: '../../../../assets/ahorcado.png',
      description: 'El objetivo del juego es adivinar la palabra incognita antes de perder todas las vidas.'    
    },
    {
      path: '/juegos/preguntados',
      name: 'Preguntados',
      image: '../../../../assets/trivia.jpg',
      description: 'Trivia sobre videojuegos.'    
    },
    {
      path: '/juegos/blackJack',
      name: 'BlackJack',
      image: '../../../../assets/blackjack.jpg',
      description: 'El objetivo del juego es obtener 21 puntos o lo mas cerca, plantarse y ganarle a la maquina.'    
    }
]