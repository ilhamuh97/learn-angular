import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10),
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  onAddIngredient(newIngredient: Ingredient){
    console.log("newIngredient", newIngredient);
    this.ingredients.push(newIngredient);
  }
  
}
