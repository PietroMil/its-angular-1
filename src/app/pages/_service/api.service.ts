import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'

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
    constructor(private httpClient: HttpClient) { }

    searchCocktailByFirstLetter(firstLetter: string): any {
        return this.httpClient
            .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=' + firstLetter)

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
    }

}