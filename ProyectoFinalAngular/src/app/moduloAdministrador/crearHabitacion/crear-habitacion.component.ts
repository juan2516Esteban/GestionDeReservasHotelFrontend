import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HabitacionesServiceService } from 'src/app/Service/habitacionesService/habitaciones-service.service';
import { Habitacion } from 'src/app/Web/Models/modelHabitacion/habitacion';
import { Hotel } from 'src/app/Web/Models/modelHotel/hotel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-habitacion',
  templateUrl: './crear-habitacion.component.html',
  styleUrls: ['./crear-habitacion.component.css'],
})
export class CrearHabitacionComponent implements OnInit {
  constructor(
    private _formBuilder: FormBuilder,
    private activeRouter: ActivatedRoute,
    private service: HabitacionesServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerHotel();
  }

  public responseData: any;
  public valorNumerico: number = 0;
  public isEditable = false;

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

  public enviarPagina(direccion: String, correo?: any) {
    this.router.navigate([direccion], {
      queryParams: { responseData: JSON.stringify(correo) },
    });
  }

  public enviarHabitacion() {
    let hotelResponse: Hotel = {
      nombreHotel: this.responseData.nombreHotel || '',
      idHotel: this.responseData.idHotel || '',
      numeroDeHabitaciones: this.responseData.numeroDeHabitaciones
        ? parseInt(this.responseData.numeroDeHabitaciones)
        : null,
      telefono: this.responseData.telefono || '',
      direccion: this.responseData.direccion || '',
      correoElectronico: this.responseData.correoElectronico || '',
      capacidadDeReservas: this.responseData.capacidadDeReservas
        ? parseInt(this.responseData.capacidadDeReservas)
        : null,
    };

    let habitacion: Habitacion = {
      idHabitaciones: this.FormGroup1.value.idDeHabitacion || '',
      numBanos: this.FormGroup2.value.numeroDeBaños
        ? parseInt(this.FormGroup2.value.numeroDeBaños)
        : null,
      capacidad: this.FormGroup3.value.capacidadDeHabitacion
        ? parseInt(this.FormGroup3.value.capacidadDeHabitacion)
        : null,
      numCamas: this.FormGroup4.value.numeroDeCamas
        ? parseInt(this.FormGroup4.value.numeroDeCamas)
        : null,
      precio: this.FormGroup6.value.precio
        ? parseInt(this.FormGroup6.value.precio)
        : null,
      cocina: this.FormGroup5.value.cocina || '',

      hotel: hotelResponse,
    };
    this.service.crearHabitacion(habitacion).subscribe((respuesta: any) => {
      console.log('Se creo la habitación con exito');
      console.log(this.responseData);

      this.enviarPagina('/paginaPrincipal', this.responseData);
    });
  }

  /* función para obtener los datos del hotel desde la pagina principal */
  public obtenerHotel() {
    this.activeRouter.queryParams.subscribe((params: any) => {
      const responseData = params['responseData'];
      if (responseData) {
        this.responseData = JSON.parse(responseData);
        console.log(this.responseData);
      }
    });
  }
}
