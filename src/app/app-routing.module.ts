import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/utente/utente.component';
import { DrinkComponent } from './pages/drink/drink.component';
import { SearchComponent } from './pages/search/search.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { OrdiniComponent } from './pages/ordini/ordini.component';
import { lookupDrinkByIDResolver } from './_resolvers/lookupdrink-by-id.resolver';
import { homeRandomResolver } from './_resolvers/homeRandom.resolver';
import { homeSearchResolver } from './_resolvers/homeSearch.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home/:letter', component: HomeComponent, resolve: {
      drinkRandom: homeRandomResolver,
      drinksSearch: homeSearchResolver,
    }
  },
  { path: 'utente', component: UserComponent },
  {
    path: 'search', component: SearchComponent
  },
  { path: 'ordini', component: OrdiniComponent },
  { path: 'ingredient/:ingredient', component: IngredientComponent },
  {
    path: 'drink/:idDrink', component: DrinkComponent, resolve: {
      drink: lookupDrinkByIDResolver
    }
  },
  { path: '', redirectTo: '/home/a', pathMatch: 'full' },
  { path: '**', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
