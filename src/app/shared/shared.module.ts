import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DividerComponent } from './divider/divider.component';
import { PerfilIconTextComponent } from './perfil-icon-text/perfil-icon-text.component';



@NgModule({
  declarations: [
    NavbarComponent,
    DividerComponent,
    PerfilIconTextComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FlexLayoutModule
  ],
  exports: [
    NavbarComponent,
    DividerComponent,
    PerfilIconTextComponent
  ]
})
export class SharedModule { }
