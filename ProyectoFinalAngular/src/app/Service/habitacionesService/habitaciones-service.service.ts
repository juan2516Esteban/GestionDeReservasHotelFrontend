import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Habitacion } from 'src/app/Web/Models/modelHabitacion/habitacion';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HabitacionesServiceService {
  constructor(private http: HttpClient) {}

  public urlHabitaciones = environment.UrlHabitacion;

  public obtenerHabitaciones(idHotel: string) {
    return this.http.get(
      this.urlHabitaciones + '/obtenerHabitaciones?idHotel=' + idHotel
    );
  }

  public crearHabitacion(habitacion: Habitacion) {
    return this.http.post(
      this.urlHabitaciones + '/crearHabitacion',
      habitacion
    );
  }
}
