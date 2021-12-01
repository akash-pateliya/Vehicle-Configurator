import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SelectVehicleComponent } from './select-vehicle/select-vehicle.component';


@NgModule({
  declarations: [SelectVehicleComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
