import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyDatosComponent } from './body-datos.component';

describe('BodyDatosComponent', () => {
  let component: BodyDatosComponent;
  let fixture: ComponentFixture<BodyDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
