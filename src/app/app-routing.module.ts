import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LandingModule } from './landing/landing.module';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }), LandingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
