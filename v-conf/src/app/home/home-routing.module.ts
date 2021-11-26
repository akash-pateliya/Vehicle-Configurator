import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ePath } from 'src/enums/path.enums';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ePath.contactUs,
    component: ContactUsComponent
  },
  {
    path: ePath.aboutUs,
    component: AboutUsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
