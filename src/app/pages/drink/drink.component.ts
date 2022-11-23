import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Drink } from 'src/app/_models/drink.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './drink.component.html',
})
export class DrinkComponent implements OnInit {

  drinkData!: Drink

  constructor(private activatedRoute: ActivatedRoute, private location: Location) {

  }
  currentLang: string = 'EN'

  onchangeLang(lang: any): void {
    this.currentLang = lang
  }
  goBack(): void {
    this.location.back()
  }
  ngOnInit(): void {

    this.activatedRoute.data.subscribe(({ drink }) => { this.drinkData = drink })

  }
}
