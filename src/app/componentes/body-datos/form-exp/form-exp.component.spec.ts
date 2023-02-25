import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExpComponent } from './form-exp.component';

describe('FormExpComponent', () => {
  let component: FormExpComponent;
  let fixture: ComponentFixture<FormExpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormExpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
