import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  drinks: any;
  searchfield: any;


  constructor(private httpClient: HttpClient) {
    //qui indico solo i servizi ..ovvero i moduli
  }

  ngOnInit(): void {
    console.log('init');
    this.httpClient.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=spritz')
      .subscribe((response: any) => {
        //console.log(response)
        this.drinks = response.drinks
      })
  }

  search() {
    const search = this.searchfield;
    console.log(search)
    this.httpClient.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
      .subscribe((response: any) => {
        //console.log(response)
        this.drinks = response.drinks
      })
  }




}
