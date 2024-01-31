import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { BitsNPiecesModule } from 'bits-n-pieces';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BitsNPiecesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
