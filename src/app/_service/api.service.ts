import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { map } from 'rxjs';
import { Drink } from '../_models/drink.model';
import { DrinkService } from './drink.service';

@Injectable({
    providedIn: 'root'
})

//abbiamo questi filtri nella api:
//search--abbiamo by name , by letter e by cocktail
//lookup
//list
//filter-- ha come input un parametro ben preciso

//creo una funzione per ogni tipo di chiamata api

export class ApiService {
    isNull: boolean = false;

    constructor(private httpClient: HttpClient, private drinkService: DrinkService) { }

    searchCocktailByFirstLetter(firstLetter: string): any {
        return this.httpClient
            .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + firstLetter)
            .pipe(map((response: any) => {
                console.log(response)
                const drinks: Drink = response.drinks as Drink
                console.log(drinks)
                if (response.drinks === null) {
                    this.isNull = true
                } else {
                    this.isNull = false
                }
                return drinks
            }))

    }

    searchCocktailByName(name: string): any {
        return this.httpClient
            .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + name)

    }

    searchCocktailByIngredient(ingredient: string): any {
        return this.httpClient
            .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + ingredient)
    }

    searchRandom(): any {
        return this.httpClient
            .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .pipe(map((response: any) => {
                console.log(response)
                const drink: Drink = response.drinks[0] as Drink
                console.log(drink)

                return drink
            }))
    }

    getIngredients(): any {
        return this.httpClient
            .get('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list')
    }

    getIngredientDetail(ingredient: string): any {
        return this.httpClient
            .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + ingredient)
    }

    lookupDrinkByID(id: string) {
        return this.httpClient
            .get("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id)
            .pipe(map((response: any) => {
                console.log(response)

                const drink: Drink = response.drinks[0] as Drink

                this.drinkService.drinkIngredient(drink)

                console.log(drink)
                return drink
            })

            )
    }
}