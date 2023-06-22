import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RiesgoComponent } from './riesgo.component';
import { CommonModule } from '@angular/common';


@NgModule({

  declarations: [RiesgoComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],  providers: [],

})
export class RiesgoModule { }
