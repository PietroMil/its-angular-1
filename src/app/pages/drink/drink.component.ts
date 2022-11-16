import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from 'src/app/_models/drink.model';


@Component({
  selector: 'app-home',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {

  drinkData!: Drink

  constructor(private activatedRoute: ActivatedRoute) {

  }
  currentLang: string = 'EN'

  onchangeLang(lang: any): void {
    this.currentLang = lang
  }

  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({ drink }) => { this.drinkData = drink })

  }
}
