import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultiplierComponent } from './multiplier.component';



@NgModule({
  declarations: [
    MultiplierComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MultiplierComponent
  ]
})
export class MultiplierModule { }
