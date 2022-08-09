import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input("cartasObtenidas") cartasObtenidas: string []= [];
  @Input("puntuacionObtenida") puntuacion: number = 0;

  @Input("") nombrePlayer: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
