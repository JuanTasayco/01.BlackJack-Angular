import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { BlackJackService } from '../../services/black-jack.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',

})
export class MainComponent {
  constructor(private blackJackService: BlackJackService) { }

  barajaJugador: string[] = [];
  barajaComputador: string[] = [];

  cartasObtenidas: string[] = [];
  cartasObtenidasMaquina: string[] = [];

  puntajeObtenido: number = 0;
  puntajeObtenidoMaquina: number = 0;


  buttonNuevoJuego: boolean = false;
  buttonObtenerCarta: boolean = true;
  buttonDetenerJuego: boolean = true;

  reiniciar() {
    this.cartasObtenidas = [];
    this.cartasObtenidasMaquina = [];
    this.puntajeObtenido = 0;
    this.puntajeObtenidoMaquina = 0;
  }


  nuevoJuego() {
    this.reiniciar();
    this.asignarEstadoBotones(false, false, true)
    this.barajaJugador = this.blackJackService.crearBaraja();
    this.barajaComputador = this.blackJackService.crearBaraja();

  }


  obtenerCarta() {
    let cartaSeleccionada: any = "";
    let puntuacionCartaSeleccionada: any = 0;
    [cartaSeleccionada, puntuacionCartaSeleccionada] = this.blackJackService.obtenerCarta(this.barajaJugador)
    this.cartasObtenidas.push(cartaSeleccionada);
    this.puntajeObtenido += puntuacionCartaSeleccionada;
    this.validacionObtenerCarta(this.puntajeObtenido, this.puntajeObtenidoMaquina)
  }

  detenerJuego() {
    this.asignarEstadoBotones(true, true, false)
    let cartaSeleccionada: any = "";
    let puntuacionCartaSeleccionada: any = 0;
    let cartaFinal = 0;
    while (this.puntajeObtenidoMaquina < 21) {
      [cartaSeleccionada, puntuacionCartaSeleccionada] = this.blackJackService.obtenerCarta(this.barajaComputador);
      cartaFinal = puntuacionCartaSeleccionada;
      this.puntajeObtenidoMaquina += puntuacionCartaSeleccionada;
      this.cartasObtenidasMaquina.push(cartaSeleccionada);
    }
    this.puntajeObtenidoMaquina = (this.puntajeObtenidoMaquina > 21) ? this.puntajeObtenidoMaquina - cartaFinal : this.puntajeObtenidoMaquina;
    this.validacionDetenerJuego(this.puntajeObtenido, this.puntajeObtenidoMaquina)
    return this.puntajeObtenidoMaquina
  }

  //adicionales
  asignarEstadoBotones(obtener: boolean, detener: boolean, nuevo: boolean) {
    this.buttonObtenerCarta = obtener;
    this.buttonDetenerJuego = detener;
    this.buttonNuevoJuego = nuevo;
  }

  validacionObtenerCarta(puntaje1: number, puntaje2: number) {

    if (puntaje1 > 21 || puntaje1 == 21) {
      this.asignarEstadoBotones(true, true, false)
      puntaje2 = this.detenerJuego();
      let validacion = (puntaje1 === puntaje2) ? "empatan" : "ordenador gana";
      alert(validacion)
    }

  }

  validacionDetenerJuego(puntaje1: number, puntaje2: number) {
    if (puntaje1 < 21) {
      let validacion = (puntaje2 > puntaje1) ? "ordenador gana" : (puntaje1 > puntaje2) ? "jugador gana" : "empatan";
      alert(validacion)
    }
  }


}
