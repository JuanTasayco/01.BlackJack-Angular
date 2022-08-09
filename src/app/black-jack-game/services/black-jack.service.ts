import { Injectable } from '@angular/core';
import * as _ from 'underscore'


@Injectable({
  providedIn: 'root'
})
export class BlackJackService {

  private _baraja: string[] = [];


  get baraja(): string[] {
    return { ...this._baraja }
  }



  constructor() { }

  crearBaraja(): string[] {
    const figurasCartas: string[] = ["S", "H", "D", "C"];
    const numEspeciales: string[] = ["J", "Q", "K", "A"]

    const baraja: string[] = [];

    for (let i = 2; i <= 10; i++) {
      for (let figura of figurasCartas) {
        baraja.push(i + figura);
      }
    }

    for (let num of numEspeciales) {
      for (let figura of figurasCartas) {
        baraja.push(num + figura);
      }
    }
    return _.shuffle(baraja);
  }

  obtenerCarta(baraja: string[]): string | number []  {
    let cartaObtenida!: any;
    let valorCartaObtenida: any;
    cartaObtenida = baraja.pop();
    valorCartaObtenida = cartaObtenida.substring(0, cartaObtenida.length - 1);
    valorCartaObtenida = (isNaN(valorCartaObtenida)) ? (valorCartaObtenida === "A") ? 11 : 10 : valorCartaObtenida * 1
    return [cartaObtenida, valorCartaObtenida]
  }


}
