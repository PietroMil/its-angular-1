import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  drinks: any;
  randomDrink: any;
  searchfield: any;
  alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'w', 'v', 'x', 'y', 'z'];
  firstLetter = '';
  isNull: boolean = false;

  constructor(private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.data)
    this.activatedRoute.data.subscribe(({ drink }) => {
      // do something with your resolved data ...
      console.log(drink)
      this.apiService.searchRandom()
        .subscribe((response: any) => {
          this.randomDrink = response.drinks[0]
        })
      this.search('a');
    })

  }

  search(letter: string) {

    this.firstLetter = letter
    this.apiService.searchCocktailByFirstLetter(letter)
      .subscribe((response: any) => {
        this.drinks = response.drinks
        if (response.drinks === null) {
          this.isNull = true
        } else {
          this.isNull = false
        }
      })
  }

  onCardSelectChange(drink: any, $event: boolean) {
    console.log("drink", drink, "selezionato?", $event)
    drink.selected = $event
  }


}
