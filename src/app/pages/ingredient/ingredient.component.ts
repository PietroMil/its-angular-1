import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../_service/api.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './ingredient.component.html',
})
export class IngredientComponent implements OnInit {

  ingredient: any = {
    ingredient: []
  }



  constructor(private apiService: ApiService, private route: ActivatedRoute) {

  }



  ngOnInit(): void {
    const ingredientName = this.route.snapshot.paramMap.get('ingredient')!;

    this.apiService.getIngredientDetail(ingredientName).subscribe((resp: any) => {
      console.log(resp)

      this.ingredient = resp.ingredients[0]

    })


  }
}

