import { Injectable } from '@angular/core'

@Injectable({
    providedIn: 'root'
})



export class DrinkService {
    constructor() { }

    drinkIngredient(drinkData: any): any {
        drinkData.ingredients = [];
        drinkData.instructions = [];
        Object.keys(drinkData).forEach((key) => {
            if (key.startsWith('strIngredient') && drinkData[key]) {
                const index = key.replace('strIngredient', '');
                console.log(index);
                drinkData.ingredients.push({
                    name: drinkData[key],
                    measure: drinkData['strMeasure' + index]
                });
            }
            if (key.startsWith('strInstructions') && drinkData[key]) {
                let lang = key.replace('strInstructions', '');
                if (!lang) {
                    lang = 'EN';
                }
                console.log(lang);
                drinkData.instructions[lang] = drinkData[key]

            }
        });
    }

}
