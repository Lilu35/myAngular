import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: `
      <div *ngFor="let p of pages">
          <app-button-sort>{{p}}</app-button-sort>    
      </div>
      
  `,
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  pages = [];

  constructor() { }

  ngOnInit(): void {
  }

}
