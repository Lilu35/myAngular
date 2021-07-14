import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myAngular';
  active = false;

  changeActive(): void{
    this.active = !this.active;
  }
}
