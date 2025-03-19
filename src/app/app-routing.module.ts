import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OurWorkComponent } from './pages/our-work/our-work.component';
import { OurPackagesComponent } from './pages/our-packages/our-packages.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { OurContactDetailsComponent } from './pages/our-contact-details/our-contact-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'our-work', component: OurWorkComponent },
  { path: 'our-packages', component: OurPackagesComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'our-contact-details', component: OurContactDetailsComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}