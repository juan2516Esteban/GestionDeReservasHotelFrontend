import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearHabitacionComponent } from './crear-habitacion.component';

describe('CrearHabitacionComponent', () => {
  let component: CrearHabitacionComponent;
  let fixture: ComponentFixture<CrearHabitacionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrearHabitacionComponent],
    });
    fixture = TestBed.createComponent(CrearHabitacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
