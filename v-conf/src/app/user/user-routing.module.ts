import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectVehicleComponent } from './select-vehicle/select-vehicle.component';

const routes: Routes = [
  {
    path: 'select-vehicle',
    component: SelectVehicleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
