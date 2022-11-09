import { Component } from '@angular/core';
import { ApiService } from '../../_service/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './ordini.component.html',
})



export class OrdiniComponent {
    drinks: any;
    searchfield: any;
    selectedDrinks: any = []
    showErrors = {
        maxFive: false,
        minTwo: false,
        empty: true
    }

    constructor(private apiService: ApiService) { }



    searchByName() {
        const searchname = this.searchfield

        this.apiService.searchCocktailByName(searchname)
            .subscribe((response: any) => {

                this.drinks = response.drinks
                this.drinks.forEach((element: any) => {
                    this.selectedDrinks.forEach((el: any) => {
                        if (el.idDrink === element.idDrink) {
                            element.selected = true
                        }
                    });
                });
            }, (error: any) => {
                console.log(error);
            })
    }

    onCardSelectChange(drink: any, $event: boolean) {
        console.log("drink", drink, "selezionato?", $event)

        if ($event) {
            if (this.selectedDrinks.length === 5) {
                return
            } else {
                drink.selected = $event
                this.selectedDrinks.push(drink)
            }


        } else {
            drink.selected = $event
            this.selectedDrinks = this.selectedDrinks.filter((el: any) => el.idDrink !== drink.idDrink)

        }
        this.handleErrors()
    }



    handleErrors() {
        if (this.selectedDrinks.length === 0) {
            this.showErrors = {
                maxFive: false,
                minTwo: false,
                empty: true
            }
        } else if (this.selectedDrinks.length < 2) {
            this.showErrors = {
                maxFive: false,
                minTwo: true,
                empty: false
            }
        } else if (this.selectedDrinks.length === 5) {
            this.showErrors = {
                maxFive: true,
                minTwo: false,
                empty: false
            }
        } else {
            this.showErrors = {
                maxFive: false,
                minTwo: false,
                empty: false
            }
        }
    }

    deleteElement(drink: any,) {
        drink.selected = false
        this.selectedDrinks = this.selectedDrinks.filter((el: any) => el.idDrink !== drink.idDrink)
    }


}