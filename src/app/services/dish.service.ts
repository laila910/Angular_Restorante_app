import { Injectable } from '@angular/core';
import {Dish} from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }
  getDishes(): Dish[]|undefined{
    return DISHES;
  }
  getDish(id : string): Dish |undefined{
    return DISHES.filter((dish)=>{ dish.id === id })[0];

  }
  getFeaturedDish(): Dish|undefined{
    return DISHES.filter((dish)=>dish.featured)[0];
  }
}
