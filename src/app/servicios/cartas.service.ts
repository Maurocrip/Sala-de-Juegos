import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartasService {
  id : string ="";

  constructor(private http: HttpClient) {}

  Empezar(){
    this.http.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1').subscribe((respuesta : any) => {
      this.id = respuesta.deck_id;
    });;
  }
  TraerCartas(cantidad : number) {
    return this.http.get("https://deckofcardsapi.com/api/deck/"+this.id+"/draw/?count="+cantidad);
  }
}
