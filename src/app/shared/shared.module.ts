import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DividerComponent } from './divider/divider.component';



@NgModule({
  declarations: [
    NavbarComponent,
    DividerComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FlexLayoutModule
  ],
  exports: [
    NavbarComponent,
    DividerComponent
  ]
})
export class SharedModule { }
