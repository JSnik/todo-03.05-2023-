import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {RouterModule} from "@angular/router";
import { TranslatePipe } from './pipes/translate.pipe';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes = [
  {
    path: '',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    HomeComponent,
    TranslatePipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
