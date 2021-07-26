import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../types/card";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataService} from "../services/data.service";
import {CartService} from "../services/cart.service";
import {CatalogService} from "../services/catalog.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = this.dataServise.getData()[0];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataServise: DataService,
    public cartService: CartService,
    private catalogService: CatalogService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (this.route.snapshot.params['id'] !== undefined){
        const p = this.catalogService.getProduct(+this.route.snapshot.params['id']);
        if (p.length === 0){
          this.router.navigate(['/not-found']);
        } else {
          this.product = p[0];
        }
      }
    })
  }

}
