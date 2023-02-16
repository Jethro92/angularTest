import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaDetalleComponent } from './nota-detalle.component';

describe('NotaDetalleComponent', () => {
  let component: NotaDetalleComponent;
  let fixture: ComponentFixture<NotaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotaDetalleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
