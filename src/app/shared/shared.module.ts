import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FlexLayoutModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class SharedModule { }
