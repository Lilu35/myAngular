import { Component, OnInit } from '@angular/core';
import * as fromApp from './../store/reducers'
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {User} from "../store/reducers/user.reducers";
import {UserSelectors} from "../store/selectors";

@Component({
  selector: 'app-top-bar',
  template: `
      <div class="topnav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact:true}">Главная</a>
          <a routerLink="/favorites" routerLinkActive="active">Избранное</a>
          <a routerLink="/catalog" routerLinkActive="active">Каталог</a>
          <a routerLink="/registration" routerLinkActive="active">Регистрация</a>
          <a routerLink="/order" routerLinkActive="active">Заказ</a>
          <a routerLink="/tabs" routerLinkActive="active">Табы для 9-ой домашки</a>
      </div>
      <div class="user-pic">
          <i class="fa fa-user fa-2x" (click)="profileDropDownOpen=!profileDropDownOpen"></i>
      </div>      
      <ng-container *ngIf="profileDropDownOpen">
          <div class="user-info" *ngIf="user$|async as user">
              <h2>{{user.firstName}} {{user.lastName}}</h2>
              <span>{{user.email}}</span>
          </div>
      </ng-container>        
  `,
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  public profileDropDownOpen = false;
  public user$: Observable<User> = this.store.pipe(
    select(UserSelectors.selectUserState)
  );

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit(): void {
  }

}
