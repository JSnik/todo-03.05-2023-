import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PopupComponent} from "./popup/popup.component";
import { BoxGeneratorComponent } from './box-generator/box-generator.component';



@NgModule({
  declarations: [PopupComponent, BoxGeneratorComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PopupComponent,
    BoxGeneratorComponent
  ]
})
export class SharedModule { }
