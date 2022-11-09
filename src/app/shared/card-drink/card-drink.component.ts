import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card-drink',
  templateUrl: './card-drink.component.html',
})

export class CardDrinkComponent {

  @Input() drink: any;


}
