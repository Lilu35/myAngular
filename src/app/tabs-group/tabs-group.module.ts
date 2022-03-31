import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsGroupComponent } from './tabs-group.component';



@NgModule({
  declarations: [
    TabsGroupComponent
  ],
  exports: [
    TabsGroupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TabsGroupModule { }
