import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './ordini.component.html',
})



export class OrdiniComponent {
    drinks: any;
    searchfield: any;
    selectedDrinks: any = []

    constructor(private apiService: ApiService) { }



    searchByName() {
        const searchname = this.searchfield
        this.apiService.searchCocktailByName(searchname)
            .subscribe((response: any) => {
                this.drinks = response.drinks
            })
    }

    onCardSelectChange(drinks: any, $event: boolean) {
        console.log("drink", drinks, "selezionato?", $event)
        drinks.selected = $event
        if ($event) {
            this.selectedDrinks.push(drinks)
        } else {
            this.selectedDrinks = this.selectedDrinks.filter((el: any) => el !== drinks)

        }
        console.log(this.selectedDrinks)
    }


    deleteElement(drinks: any) {
        this.selectedDrinks = this.selectedDrinks.filter((el: any) => el !== drinks)
    }


}