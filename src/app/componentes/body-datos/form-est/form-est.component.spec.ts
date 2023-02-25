import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstComponent } from './form-est.component';

describe('FormEstComponent', () => {
  let component: FormEstComponent;
  let fixture: ComponentFixture<FormEstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
