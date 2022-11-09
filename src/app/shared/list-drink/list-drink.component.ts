import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-drink',
  templateUrl: './list-drink.component.html',
})

export class ListDrinkComponent {

  @Input() drink: any;
  @Input() selected!: boolean;
  @Output() onSelectChange: EventEmitter<boolean> = new EventEmitter();

  onSelect($event: any) {

    this.onSelectChange.emit($event.currentTarget.checked)
  }

}
