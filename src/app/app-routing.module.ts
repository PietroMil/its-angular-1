import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserComponent } from './pages/utente/utente.component';
import { DrinkComponent } from './pages/drink/drink.component';
import { SearchComponent } from './pages/search/search.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { OrdiniComponent } from './pages/ordini/ordini.component';
import { routeResolver } from './_service/routeResolve.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home', component: HomeComponent, resolve: {
      drink: routeResolver
    }
  },
  { path: 'utente', component: UserComponent },
  {
    path: 'search', component: SearchComponent
  },
  { path: 'ordini', component: OrdiniComponent },
  { path: 'ingredient/:ingredient', component: IngredientComponent },
  {
    path: 'drink/:idDrink', component: DrinkComponent
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
