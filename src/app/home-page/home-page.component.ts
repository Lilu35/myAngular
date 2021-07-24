import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
      <div><h1>{{title}}</h1></div>
  `,
  styles: [
  ]
})
export class HomePageComponent implements OnInit {
  title = 'MY SHOP';

  constructor() { }

  ngOnInit(): void {
  }

}
