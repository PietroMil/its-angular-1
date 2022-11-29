import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  drinks: any;

  searchfield: any;
  alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
  alphabet2 = [ 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w'];
  alphabet3 = [ 'v', 'x', 'y', 'z'];
  firstLetter = '';


  isNull: boolean = false;

  randomDrink: any

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.data)
    this.activatedRoute.data.subscribe(({ drinkRandom, drinksSearch }) => {

      this.randomDrink = drinkRandom
      this.drinks = drinksSearch

    })

  }


  onCardSelectChange(drink: any, $event: boolean) {
    console.log("drink", drink, "selezionato?", $event)
    drink.selected = $event
  }


}
