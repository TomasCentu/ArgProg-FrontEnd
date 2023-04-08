import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderDatosComponent } from './header-datos.component';

describe('HeaderDatosComponent', () => {
  let component: HeaderDatosComponent;
  let fixture: ComponentFixture<HeaderDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
