import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHabComponent } from './form-hab.component';

describe('FormHabComponent', () => {
  let component: FormHabComponent;
  let fixture: ComponentFixture<FormHabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormHabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormHabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
