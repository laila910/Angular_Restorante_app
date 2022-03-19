import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  getPromotions(): Promotion[]|undefined{
    return PROMOTIONS;
  }
  getPromotion(id : string): Promotion |undefined{
    return PROMOTIONS.filter((promo)=>{ promo.id ===id })[0];

  }
  getFeaturedPromotion(): Promotion|undefined{
    return PROMOTIONS.filter((promo)=>promo.featured)[0];
  }
}
