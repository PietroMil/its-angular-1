import { Component, OnInit } from '@angular/core';
import { ApiService } from '../_service/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
    drinks: any;
    searchfield: any;
    secondsearchfield: any;
    constructor(private apiService: ApiService) { }

    ngOnInit(): void { }

    searchByName() {
        const searchname = this.searchfield
        this.apiService.searchCocktailByName(searchname)
            .subscribe((response: any) => {
                this.drinks = response.drinks
            })
    }

    searchByIngredient() {
        const searchname = this.secondsearchfield
        this.apiService.searchCocktailByIngredient(searchname)
            .subscribe((response: any) => {
                this.drinks = response.drinks
            })
    }
}