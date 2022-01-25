import { Component, OnInit } from '@angular/core';
import * as fromUser from './../../../store/reducers/user.reducers'
import {User} from "./../../../store/reducers/user.reducers";
import {signInSuccess} from "../../../store/actions/user.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-sign-in-page',
  template: `
      <div class="container sign-in__container">
          <div class="container sign-in__form-container">
              <h2>Войти в личный кабинет</h2>
              <app-sign-in-form (onSignIn)="storeUser($event)"></app-sign-in-form>
          </div>    
      </div>
  `,
  styles: [`
    :host{display: block;} 
    .sign-in__container{display: flex;justify-content: center;align-items: center;min-height: calc(100vh - 56px);}
    .sign-in__form-container{width: 40%;}
    .sign-in__form{margin-top: 32px; }
    `]
})
export class SignInPageComponent implements OnInit {

  public storeUser(user:User){
    this.store.dispatch(signInSuccess({user}));
  }

  constructor(private store: Store<fromUser.User>) { }

  ngOnInit(): void {
  }


}
