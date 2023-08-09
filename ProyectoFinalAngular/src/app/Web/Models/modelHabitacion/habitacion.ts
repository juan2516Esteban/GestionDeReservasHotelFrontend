import { Hotel } from '../modelHotel/hotel';

export interface Habitacion {
  idHabitaciones: String;

  numBanos: number | null;

  capacidad: number | null;

  numCamas: number | null;

  cocina: String;

  precio: number | null;

  hotel: Hotel;
}
