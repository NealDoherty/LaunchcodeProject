import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { PantryComponent } from './components/pantry/pantry.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'signup', loadChildren: () => import('./components/signup/signup.module').then(m => m.SignupModule) },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'pantry',
    component: PantryComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
