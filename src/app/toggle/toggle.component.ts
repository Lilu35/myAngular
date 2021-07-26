import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Toggle} from "../types/card";
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
  selector: 'app-toggle',
  template: `
    <ul>
        <li *ngFor="let t of toggles" [ngStyle]="{backgroundColor:t===this.selected?'lightsalmon':'white'}">
            <app-button *ngIf="t.value !== null" [text]="t.label" (click)="selectedChanged(t)"></app-button>
        </li>
    </ul>
  `,
  styles: ['li {list-style-type: none;display: inline-block;margin-right: 5px;border-radius: 20px;padding: 3px;}']
})
export class ToggleComponent implements OnInit {
  @Input() toggles: Array<Toggle> = [];
  @Input() selected: Toggle = this.toggles[0];
  @Output() toggleChanged = new EventEmitter<any>();
  public sort: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.sort = this.route.snapshot.queryParams['sort'];
      console.log(this.sort);
      this.selectedChanged(this.toggles.find(t => t.value === this.sort));
    })
  }

  selectedChanged(item: Toggle|undefined){
    if (!item) return;
    const sort = item.value;
    this.router.navigate(['.'],{relativeTo: this.route, queryParams: {sort}});
    this.selected = item;
    this.toggleChanged.emit(item);
  }

}
