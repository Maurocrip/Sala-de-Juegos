import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PreguntaService } from 'src/app/servicios/pregunta.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class PreguntadosComponent {

  public perdio : boolean = true;
  public puntos : number = 0;
  public pregunta : string = "";
  public respustaCorrecta : string = "";
  public opciones : Array<string> = [];

  constructor(private servicio : PreguntaService){this.Pregunta()}
  
  Reintentar()
  {
    this.puntos = 0;
    this.perdio = true;
    this.Pregunta();
  }

  Pregunta()
  {
    let consulta = this.servicio.GenerarPalabra()
    consulta.subscribe((respuesta : any)=>
    {
      console.log("la respuesta correcta es: " + respuesta.results[0].correct_answer);
      this.pregunta = this.ModificarFrase(respuesta.results[0].question);
      this.respustaCorrecta = this.ModificarFrase(respuesta.results[0].correct_answer)

      this.opciones.push(this.respustaCorrecta);
      for (let index = 0; index < respuesta.results[0].incorrect_answers.length; index++) 
      {
        this.opciones.push(this.ModificarFrase(respuesta.results[0].incorrect_answers[index]));
      }
      
      this.opciones.sort(()=>Math.random()-0.5);
    })
  }
  
  Verificar(opcion : any)
  {
    if(opcion == this.respustaCorrecta)
    {
      this.opciones = [];
      this.puntos++;
      this.Pregunta();
    }
    else
    {
      this.perdio = false;
      this.opciones = [];
    }
  }

  ModificarFrase(frase : string) : string
  {
    let resultado = frase;
    if(resultado.includes("&#039;"))
    {
      resultado = resultado.replaceAll("&#039;","'")
    }
    if(resultado.includes("&quot;"))
    {
      resultado = resultado.replaceAll("&quot;",'"');
    }
    if(resultado.includes("&amp;"))
    {
      resultado = resultado.replaceAll("&amp;",'&');
    }
    if(resultado.includes("&aring;"))
    {
      resultado = resultado.replaceAll("&aring;",'å');
    }
    return resultado;

  }
}
