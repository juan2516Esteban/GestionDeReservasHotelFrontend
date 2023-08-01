import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-crear-habitacion',
  templateUrl: './crear-habitacion.component.html',
  styleUrls: ['./crear-habitacion.component.css'],
})
export class CrearHabitacionComponent {
  public valorNumerico: number = 0;

  FormGroup1 = this._formBuilder.group({
    idDeHabitacion: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
    ],
  });

  FormGroup2 = this._formBuilder.group({
    numeroDeBaños: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2),
      ]),
    ],
  });

  FormGroup3 = this._formBuilder.group({
    capacidadDeHabitacion: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2),
      ]),
    ],
  });

  FormGroup4 = this._formBuilder.group({
    numeroDeCamas: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(2),
      ]),
    ],
  });

  FormGroup5 = this._formBuilder.group({
    cocina: ['', Validators.required],
  });

  FormGroup6 = this._formBuilder.group({
    precio: [
      '',
      Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
    ],
  });

  isEditable = false;

  constructor(private _formBuilder: FormBuilder) {}
}
