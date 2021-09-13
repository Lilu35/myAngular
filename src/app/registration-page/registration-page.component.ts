import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-registration-page',
  template: `
    <div>
      <h2>Регистрация пользователя</h2>
      <form class="user-form" #formData="ngForm" (ngSubmit)="sendForm(formData)" [ngFormOptions]="{updateOn:'blur'}">
          <section class="form-personal">
              <div>
                  <label>Фамилия Имя:</label>
                  <input type="text" class="form-control" name="userName" ngModel required pattern="([а-яА-Я]+\\s[а-яА-Я]+|[a-zA-z]+\\s[a-zA-z]+){1}" #userName="ngModel">
                  <small *ngIf="userName.hasError('required')">Введите Фамилия Имя</small>
                  <small *ngIf="userName.hasError('pattern')">Фамилия Имя должны состоять только из кириллических и латинских букв и не менее чем из двух слов</small>
              </div>
              <div>
                  <label>Email:</label>
                  <input type="email" class="form-control" name="email" ngModel required email #email="ngModel">
                  <small *ngIf="email.hasError('required')">Введите email</small>
                  <small *ngIf="email.hasError('email')">Введите корректный email</small>
              </div>                            
          </section>
          <section class="form-password">
              <ng-container ngModelGroup="password" appPasswordMatch #passwordGroup="ngModelGroup">
                  <div>
                      <label>Пароль:</label>
                      <input type="text" class="form-control" name="password" ngModel required
                             pattern="^(?=.*?[A-Z]{1,})(?=.*?[a-z]{1,})(?=(.*[\\d]){1,})(?=(.*[\\W]){1,})(?!.*\\s).{8,}$"
                             #password="ngModel">
                      <small *ngIf="password.hasError('required')">Введите пароль</small>
                      <small *ngIf="password.hasError('pattern')">Пароль должен содержать минимум восемь символов,
                          должен состоять из латинских букв разного регистра, содержать минимум одну цифру и один
                          спецсимвол</small>
                  </div>
                  <div>
                      <label>Повторите пароль:</label>
                      <input type="text" class="form-control" name="confirm" ngModel required  #confirm="ngModel">
                      <small *ngIf="confirm.hasError('required')">Повторите пароль</small>                      
                  </div>
                  <small *ngIf="passwordGroup.hasError('passwordMatch')">Пароль должен соответствовать полю «Пароль»</small>
              </ng-container>              
          </section>
          <div>
              <button class="submit">Зарегистрировать</button>
          </div>              
      </form>  
    </div>      
  `,
  styles: [ 'label{font-size: small;}','small{color: red;font-size: x-small; display: block;}','input{display: block;}','button{margin-top: 10px;}'
  ]
})
export class RegistrationPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sendForm(form:NgForm):void{
    if (!form.valid){
      return;
    }
    console.log(form.value);
  }

}
