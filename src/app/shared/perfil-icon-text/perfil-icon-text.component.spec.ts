import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilIconTextComponent } from './perfil-icon-text.component';

describe('PerfilIconTextComponent', () => {
  let component: PerfilIconTextComponent;
  let fixture: ComponentFixture<PerfilIconTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilIconTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilIconTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
