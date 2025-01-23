import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {

  constructor(private http: HttpClient) {}

  GenerarPalabra(){
    return this.http.get('https://opentdb.com/api.php?amount=1&category=15&difficulty=medium&type=multiple');
  }
}
