import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNotaComponent } from './form-nota.component';

describe('FormNotaComponent', () => {
  let component: FormNotaComponent;
  let fixture: ComponentFixture<FormNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
