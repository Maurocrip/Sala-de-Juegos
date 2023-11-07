import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalabraService {

  constructor(private http: HttpClient) {}

  GenerarPalabra(){
    return this.http.get('https://clientes.api.greenborn.com.ar/public-random-word');
  }
}
