import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DrinkService } from 'src/app/drink.servie';

@Component({
  selector: 'app-home',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {


  drinkData: any = {
    ingredients: [],
    instructions: []
  };

  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private drinkService: DrinkService) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idDrink')!;

    this.httpClient.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
      .subscribe((response: any) => {
        console.log(response)
        this.drinkData = response.drinks[0]

        this.drinkService.drinkIngredient(this.drinkData)


      })

  }
}

//usare Object.keys dato un oggetto restituisci le chiavi