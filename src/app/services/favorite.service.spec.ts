import { TestBed } from '@angular/core/testing';

import { FavoriteService } from './favorite.service';
import {Product} from "../types/card";

describe('FavoriteService', () => {
  let service: FavoriteService;
  let product: Product;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoriteService);
    product = {
      id: 1,
      image: "/assets/id-1-white.jpg",
      name: "FIRST CLASS",
      model: "Стул кухонный",
      cost: 1299,
      discount: false,
      available: true,
    };
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add product to favorite', () => {
    let productCount: number|undefined;
    service.addToFavorite(product);
    service.getProductQty(product).subscribe((count:number) => {productCount = count});
    expect(productCount).toBe(1);
  });

  it('should remove product from favorite', () => {
    let productCount: number|undefined;
    service.addToFavorite(product);
    service.removeFromFavorite(product);
    service.getProductQty(product).subscribe((count:number) => {productCount = count});
    expect(productCount).toBeFalsy();
  });

  it('should returns count', () => {
    let productCount: number|undefined;
    service.getProductQty(product).subscribe((count:number) => {productCount = count});
    expect(productCount).toBeFalsy();
    service.addToFavorite(product);
    expect(productCount).toBe(1);
  });

  it('should clear favorite', () => {
    let productCount: number|undefined;
    service.addToFavorite(product);
    service.clearFavorite();
    service.getProductQty(product).subscribe((count:number) => {productCount = count});
    expect(productCount).toBeFalsy();
  })

});
