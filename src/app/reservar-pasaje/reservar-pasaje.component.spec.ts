import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservarPasajeComponent } from './reservar-pasaje.component';

describe('ReservarPasajeComponent', () => {
  let component: ReservarPasajeComponent;
  let fixture: ComponentFixture<ReservarPasajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservarPasajeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservarPasajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
