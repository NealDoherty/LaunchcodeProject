import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PantryComponent } from './components/pantry/pantry.component';
import { RecipesComponent } from './recipes/recipes.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { EditPantryComponent } from './components/edit-pantry/edit-pantry.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: RecipesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { 
    path: 'signup', loadChildren: () => import('./components/signup/signup.module').then(m => m.SignupModule) 
  },
  {
    path: 'pantry',
    component: PantryComponent
  },
  {
    path: 'pantry/edit-pantry',
    component: EditPantryComponent
  },
  {
    path: 'recipes',
    component: RecipesComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
