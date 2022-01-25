import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {User} from "../../../store/reducers/user.reducers";

@Component({
  selector: 'app-sign-in-form',
  template: `
      <form class="user-form" [formGroup]="signInForm" (ngSubmit)="signIn()">
          <div class="form-group">
              <label>Фамилия:</label>
              <input class="form-control" name="lastName" formControlName="lastName">
          </div>
          <div class="form-group">
              <label>Имя:</label>
              <input class="form-control" name="firstName" formControlName="firstName">
          </div>
          <div class="form-group">
              <label>Email:</label>
              <input class="form-control" name="email" formControlName="email">
          </div>
          <button type="submit">Войти</button>
      </form>
  `,
  styles: [`
      :host{display: block;} 
      .form-group{margin-bottom: 24px;} 
      button{width: 50%; margin-left: 5px;} 
      .form-control{display: block;width: 50%;}
`]
})
export class SignInFormComponent implements OnInit {
  @Output() public onSignIn: EventEmitter<User> = new EventEmitter<User>();
  public signInForm: FormGroup = this.fb.group({
    firstName: '',
    lastName: '',
    email: ''
  });

  public signIn():void{
    const formValue = this.signInForm.value;
    this.onSignIn.emit(formValue);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
