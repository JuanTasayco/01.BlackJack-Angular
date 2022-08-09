import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BlackJackGameModule } from './black-jack-game/black-jack-game.module';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    BlackJackGameModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
