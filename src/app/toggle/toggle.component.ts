import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Toggle} from "../types/card";

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

  constructor() { }

  ngOnInit(): void {
  }

  selectedChanged(item: Toggle){
    this.selected = item;
    this.toggleChanged.emit(item);
  }

}
