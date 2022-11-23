import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Drink } from 'src/app/_models/drink.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  drinks: any;

  searchfield: any;
  alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'v', 'x', 'y', 'z'];
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
