import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../types/card";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product = this.dataServise.getData()[0];
  @Output() addProduct: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataServise: DataService) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (this.route.snapshot.params['id'] !== undefined){
        const q = this.dataServise.getData().filter(p => p.id === +this.route.snapshot.params['id']).length ?? 0;
        if (q === 0){
          this.router.navigate(['/not-found']);
        } else {
          this.product = this.dataServise.getData().find(p => p.id === +this.route.snapshot.params['id']) ?? this.dataServise.getData()[0];
        }
      }
    })
  }

  onClick(){
    this.addProduct.emit(this.product);
  }

}
