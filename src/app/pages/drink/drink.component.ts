import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {

  drinkData: any = {};

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idDrink')!;

    this.httpClient.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
      .subscribe((response: any) => {
        console.log(response)
        this.drinkData = response.drinks[0]
        this.drinkData.ingredients = []
        this.drinkData.istru
        Object.keys(this.drinkData).forEach((key) => {
          if (key.startsWith('strIngredient') && this.drinkData[key]) {
            const index = key.replace('strIngredient', '');
            console.log(index);
            this.drinkData.ingredients.push({
              name: this.drinkData[key],
              measure: this.drinkData['strMeasure' + index]
            });
          }
        })

      })

  }
}

//usare Object.keys dato un oggetto restituisci le chiavi