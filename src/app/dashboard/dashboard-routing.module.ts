import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineGraphComponent } from './line-graph/line-graph.component';

const routes: Routes = [
  {
    path: '',
    component: LineGraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
