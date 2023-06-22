import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReporteRoutingModule } from './reporte-routing.module';
// import { RiesgoComponent } from './riesgo/RiesgoComponent';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { RiesgoComponent } from './riesgo/riesgo.component';
const routes: Routes = [
  {
    path: 'riesgo',
    component: RiesgoComponent,
    data: {
      title: 'Riesgo',
      breadcrumb: 'Riesgo'
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReporteRoutingModule,
    HttpClientModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],

  providers: [],

})
export class ReporteModule { }
