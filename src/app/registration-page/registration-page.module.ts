import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationPageComponent } from './registration-page.component';
import {FormsModule} from "@angular/forms";
import {AppComponent} from "../app.component";
import {PasswordMatchDirective} from "../checkout/directives/password-match.directive";

@NgModule({
  declarations: [
    RegistrationPageComponent,
    PasswordMatchDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    RegistrationPageComponent
  ]
})
export class RegistrationPageModule { }
