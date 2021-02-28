import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardTileComponent } from './components/card-tile/card-tile.component';



@NgModule({
  declarations: [CardComponent, CardTileComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, CardTileComponent]
})
export class AppCommonModule { }
