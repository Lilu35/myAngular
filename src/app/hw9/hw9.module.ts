import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hw9Component } from './hw9.component';
import {TabsModule} from "../tabs/tabs.module";
import {TabsBodyModule} from "../tabs-body/tabs-body.module";
import {TabsHeaderModule} from "../tabs-header/tabs-header.module";
import {ButtonModule} from "../button/button.module";
import {TabsGroupModule} from "../tabs-group/tabs-group.module";
import {IconModule} from "../icon/icon.module";



@NgModule({
  declarations: [
    Hw9Component
  ],
  imports: [
    CommonModule,
    TabsModule,
    TabsBodyModule,
    TabsHeaderModule,
    ButtonModule,
    TabsGroupModule,
    IconModule
  ],
  exports: [
    Hw9Component
  ]
})
export class Hw9Module { }
