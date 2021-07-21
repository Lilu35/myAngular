import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../types/card";
import {products} from "../data/product.data";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = products[0];
  @Output() addProduct: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (this.route.snapshot.params['id'] !== undefined){
        const q = products.filter(p => p.id === +this.route.snapshot.params['id']).length ?? 0;
        if (q === 0){
          this.router.navigate(['/not-found']);
        } else {
          this.product = products.find(p => p.id === +this.route.snapshot.params['id']) ?? products[0];
        }
      }
    })
  }

  onClick(){
    this.addProduct.emit(this.product);
  }

}
