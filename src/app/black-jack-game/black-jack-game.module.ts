import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from './components/cards/cards.component';
import { MainComponent } from './main-cards/main/main.component';
import { ImagenPipe } from './imagen.pipe';




@NgModule({
  declarations: [
    CardsComponent,
    MainComponent,
    ImagenPipe,

  ],
  imports: [
    CommonModule
  ],
  exports: [
   MainComponent

  ]
})
export class BlackJackGameModule { }
