import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LandingModule } from './landing/landing.module';

const routes: Routes = [
  { path: '', component: LandingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes), LandingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
