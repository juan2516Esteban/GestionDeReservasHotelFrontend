import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotelServiceService } from 'src/app/Service/hotelService/hotel-service.service';
import { Hotel } from 'src/app/Web/Models/modelHotel/hotel';

@Component({
  selector: 'app-crear-hotel',
  templateUrl: './crear-hotel.component.html',
  styleUrls: ['./crear-hotel.component.css'],
})
export class CrearHotelComponent {
  constructor(private service: HotelServiceService) {}

  value: String = 'Clear me';
  responseHotel: any;

  fromHotel = new FormGroup({
    nombreHotel: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    idHotel: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    numeroDeHabitaciones: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(3),
    ]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    direccion: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(50),
    ]),
    correoElectronico: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(10),
      Validators.maxLength(60),
    ]),
  });

  public enviarFormulario() {
    let hotel: Hotel = {
      nombreHotel: this.fromHotel.value.nombreHotel || '',
      idHotel: this.fromHotel.value.idHotel || '',
      numeroDeHabitaciones: this.fromHotel.value.numeroDeHabitaciones
        ? parseInt(this.fromHotel.value.numeroDeHabitaciones)
        : null,
      telefono: this.fromHotel.value.telefono || '',
      direccion: this.fromHotel.value.direccion || '',
      correoElectronico: this.fromHotel.value.correoElectronico || '',
      capacidadDeReservas: this.fromHotel.value.numeroDeHabitaciones
        ? parseInt(this.fromHotel.value.numeroDeHabitaciones)
        : null,
    };
    this.service.crearHotel(hotel).subscribe((response) => {
      this.responseHotel = response;
      this.mostarHotel();
    });
  }

  mostarHotel() {
    console.log(this.responseHotel);
  }

  onKeyDown(event: any) {
    const allowedChars = /[0-9]/; // Expresión regular para permitir solo números
    const inputChar = event.key;

    if (event.key === 'Backspace') {
      return;
    }

    if (!allowedChars.test(inputChar)) {
      event.preventDefault(); // Cancela el evento si se ingresa una letra
    }
  }
}
