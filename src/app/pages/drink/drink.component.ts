import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DrinkService } from 'src/app/_service/drink.service';

@Component({
  selector: 'app-home',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {


  drinkData: any = {
    ingredients: [],
    instructions: [],

  };

  currentLang = 'EN'

  constructor(private route: ActivatedRoute, private activatedRoute: ActivatedRoute, private httpClient: HttpClient, private drinkService: DrinkService) {

  }

  onchangeLang(lang: any): void {
    this.currentLang = lang
  }

  ngOnInit(): void {


    const id = this.route.snapshot.paramMap.get('idDrink')!;

    this.httpClient.get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
      .subscribe((response: any) => {
        console.log(response)

        this.drinkData = response.drinks[0]

        this.drinkService.drinkIngredient(this.drinkData)

        console.log(this.drinkData)
      })

  }
}


//usare Object.keys dato un oggetto restituisci le chiavi