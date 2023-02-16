import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNotaComponent } from './card-nota.component';

describe('CardNotaComponent', () => {
  let component: CardNotaComponent;
  let fixture: ComponentFixture<CardNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardNotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
