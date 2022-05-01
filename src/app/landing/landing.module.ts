import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills/skills.component';
import { PresentacionNameComponent } from './presentacion-name/presentacion-name.component';
import { AboutComponent } from './about/about.component';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { TrabajosComponent } from './trabajos/trabajos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    PresentacionNameComponent,
    AboutComponent,
    LandingComponent,
    SkillsComponent,
    TrabajosComponent,
    ContactoComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule
  ]
})
export class LandingModule { }
