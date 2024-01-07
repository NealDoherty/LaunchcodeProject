import { Component, OnInit } from '@angular/core';
import { User } from 'firebase/auth';
import { auth } from 'src/firebase/firebase.init';
import { firebase_service } from 'src/firebase/firebase.service';
import { SearchRecipesService } from 'src/app/services/search-recipes.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})

export class FavoritesComponent implements OnInit {

  existingFavorites;
  recipes: object [] = []; 
  recipesString;  

  display = false;
  instructions: object [];
  ingredients: object [];
  sections: object [];  
  components: object [] = [];  
  filtered: object[] = [];
  storedRecipes;
  thumbnailURL: object[];
  recipeName: object[];
  yieldAmount: object[];
  cookTime: object[];
  prepTime: object[];

  user: User = null;
  user_id: string = null;

  constructor(private searchRecipeService: SearchRecipesService) { }

  ngOnInit(): void {

    this.retrieveFavorites();

    auth.onAuthStateChanged(user => {
      if(user) {
        this.user = user;
        this.user_id = user.uid;
      }
    });
  }


  retrieveFavorites() {  
    console.log("retrieve favorites");
      firebase_service.readCollection('users/dummy_user/favorite_recipes').then(data => {
        this.existingFavorites = data;
      });    

      console.log("exit retrieve favorites");
    }     

  onSubmit() {       
    console.log("enter onSubmit");
  
    for(let i=0;i<this.existingFavorites.length;i++){
      console.log("inside for loop");
      console.log(this.existingFavorites[i]);
      
    this.searchRecipeService.getRecipesByID(this.existingFavorites[i])
      .subscribe(resp => {
          this.recipes.push(resp);
  
          /*
          this.recipesString = JSON.stringify(this.recipes); //these may not be necessary due to compilationFilter (recipes component) not being utilized
          this.recipes = JSON.parse(this.recipesString);        
          */

          console.log(this.recipes);
        })  
    }
    console.log("exit onSubmit");

  }

    //Function called when a user clicks a recipe name in the html view. Assigns relevant information from retrieved recipes to variables for display in html
  instructionAndIngredientFunction(selected):void{
    this.display = true;    
    this.recipeName = selected['name'];
    this.instructions = selected['instructions'];
    this.sections = selected['sections'];
    this.thumbnailURL = selected['thumbnail_url'];
    this.components = [];
    this.sectionDisplay();
    this.yieldAmount = selected['yields']; 
    this.cookTime = selected['cook_time_minutes'];
    this.prepTime = selected['prep_time_minutes'];
  }  

  //function to retrieve all ingredients from nested JSON object
  //Should probably rename to make purpose clearer. Relevant data is nested in a key value called section and then others called components
  sectionDisplay():void{   
    for(let section of this.sections)
    {
      let components: object [] = section['components'];
      for(let component of components){
        this.components.push(component);
      }
    }   
  }  

  

}
