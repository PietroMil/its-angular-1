import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/utente/utente.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { HttpClientModule } from '@angular/common/http'
import { DrinkComponent } from './pages/drink/drink.component';
import { SearchComponent } from './pages/search/search.component';
import { CardDrinkComponent } from './shared/card-drink/card-drink.component';
import { OrdiniComponent } from './pages/ordini/ordini.component';
import { ListDrinkComponent } from './shared/list-drink/list-drink.component';
import { NavComponent } from './shared/navbar/nav.component';
import { BlockUIModule } from 'ng-block-ui';
import { BlockUIHttpModule } from 'ng-block-ui/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    DrinkComponent,
    SearchComponent,
    CardDrinkComponent,
    OrdiniComponent,
    ListDrinkComponent,
    NavComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule,
    BlockUIModule.forRoot(), // Import BlockUIModule
    BlockUIHttpModule.forRoot(), // Import Block UI Http Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
