import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignInPageComponent } from './containers/sign-in-page/sign-in-page.component';
import { SignInFormComponent } from './components/sign-in-form/sign-in-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ButtonModule} from "../button/button.module";


@NgModule({
  declarations: [
    SignInPageComponent,
    SignInFormComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    ButtonModule
  ]
})
export class AuthModule { }
