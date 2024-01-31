import { NgModule } from '@angular/core';
import { BitsNPiecesComponent } from './bits-n-pieces.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    BitsNPiecesComponent,
  ],
  imports: [
    ButtonComponent
  ],
  exports: [
    BitsNPiecesComponent,
    ButtonComponent
  ]
})
export class BitsNPiecesModule { }
