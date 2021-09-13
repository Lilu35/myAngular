import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  template: `
      <div class="topnav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Главная</a>
          <a routerLink="/favorites" routerLinkActive="active">Избранное</a>
          <a routerLink="/catalog" routerLinkActive="active">Каталог</a>
          <a routerLink="/registration" routerLinkActive="active">Регистрация</a>
      </div>
  `,
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
