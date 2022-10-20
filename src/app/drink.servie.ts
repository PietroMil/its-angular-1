import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})

export class DrinkService {
    constructor() { }

    drinkIngredient(drinkData: any): any {
        drinkData.ingredients = []
        Object.keys(drinkData).forEach((key) => {
            if (key.startsWith('strIngredient') && drinkData[key]) {
                const index = key.replace('strIngredient', '');
                console.log(index);
                drinkData.ingredients.push({
                    name: drinkData[key],
                    measure: drinkData['strMeasure' + index]
                });
            }
        })
    }
}