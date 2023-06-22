import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RiesgoComponent } from './riesgo/riesgo.component';
// import { RiesgoComponent } from './riesgo/RiesgoComponent';

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReporteRoutingModule { }
