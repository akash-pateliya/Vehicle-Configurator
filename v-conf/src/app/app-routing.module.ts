import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthService } from './auth/auth.service';
import { HomeComponent } from './home/home.component';
import { SelectVehicleComponent } from './user/select-vehicle/select-vehicle.component';

const routes: Routes = [
  // for the default url (url with no path)
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'home',
    component: HomeComponent,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'admin',
    component: DashboardComponent,
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthService]
  },{
    path: 'user',
    component: SelectVehicleComponent,
    loadChildren: () => import('./user/user.module').then(m => m.UserModule),
    canActivate: [AuthService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
