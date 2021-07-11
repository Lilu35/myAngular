import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button>Click me</button>
  `,
  styles: [

  ]
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
