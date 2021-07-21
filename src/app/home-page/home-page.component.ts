import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  template: `
      <div><h1>{{title}}</h1></div>
<!--      <ul>-->
<!--          <li>-->
<!--              <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Главная</a>-->
<!--          </li>-->
<!--          <li>-->
<!--              <a routerLink="/favorites" routerLinkActive="active">Избранное</a>-->
<!--          </li>-->
<!--          <li>-->
<!--              <a routerLink="/catalog" routerLinkActive="active">Каталог</a>        -->
<!--          </li>-->
<!--          <li>-->
<!--              <a routerLink="/not-found" routerLinkActive="active">404</a>-->
<!--          </li>-->
<!--      </ul>-->
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
