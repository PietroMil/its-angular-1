import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
    drinks: any;
    searchfield: any;
    secondsearchfield: any;
    ingredients: any;
    ingredientQuery: string = '';

    constructor(private apiService: ApiService,) { }

    ngOnInit(): void {
        this.apiService.getIngredients()
            .subscribe((response: any) => {
                this.ingredients = response.drinks
                console.log(this.ingredients)
            })
    }

    searchByName() {
        const searchname = this.searchfield
        this.apiService.searchCocktailByName(searchname)
            .subscribe((response: any) => {
                this.drinks = response.drinks
            })
    }

    searchByIngredient() {
        const searchname = this.ingredientQuery
        this.apiService.searchCocktailByIngredient(searchname)
            .subscribe((response: any) => {
                this.drinks = response.drinks
            })
    }
}




