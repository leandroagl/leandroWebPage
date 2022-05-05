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
import { ExperienceComponent } from './about/experience/experience.component';
import { NgbAlertModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    PresentacionNameComponent,
    AboutComponent,
    LandingComponent,
    SkillsComponent,
    TrabajosComponent,
    ContactoComponent,
    ExperienceComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlexLayoutModule,
    NgbNavModule,
    NgbAlertModule
  ]
})
export class LandingModule { }
