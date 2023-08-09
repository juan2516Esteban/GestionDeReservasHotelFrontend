import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Hotel } from 'src/app/Web/Models/modelHotel/hotel';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HotelServiceService {
  constructor(private http: HttpClient) {}

  public urlHotel = environment.UrlHotel;

  public crearHotel(hotel: Hotel) {
    return this.http.post(this.urlHotel + '/crearHotel', hotel);
  }

  public obtenerHoteles() {
    return this.http.get(this.urlHotel + '/obtenerHoteles');
  }

  public obtenerHotelPorCorreo(correo: String) {
    return this.http
      .get(this.urlHotel + '/obtenerHotelPorCorreo?correo=' + correo)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage =
            'los datos ingresados son son de un usuario administrador de un hotel';
          if (error.status === 404) {
            errorMessage = 'Usuario no encontrado';
          } else if (error.status === 500) {
            errorMessage = 'Error en el servidor';
          }
          return throwError(() => new Error(errorMessage));
        })
      );
  }
}
