import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { listaJuegos } from 'src/app/Listas/Juegos-L';

@Component({
  selector: 'app-carta-juegos',
  standalone: true,
  imports:[    
    CommonModule,  
    RouterModule],
  templateUrl: './carta-juegos.component.html',
  styleUrl: './carta-juegos.component.css'
})
export class CartaJuegosComponent {
get juegos()
{
  return listaJuegos;
}
}
