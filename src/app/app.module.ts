import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './components/login/login.component';
import { PantryComponent } from './components/pantry/pantry.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchRecipesService } from './services/search-recipes.service';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChildSearchRecipeComponent } from './child-search-recipe/child-search-recipe.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EditPantryComponent } from './components/edit-pantry/edit-pantry.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PantryComponent,
    RecipesComponent,
    RecipesComponent,
    FavoritesComponent,
    PageNotFoundComponent,
    ChildSearchRecipeComponent,
    EditPantryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  providers: [SearchRecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
