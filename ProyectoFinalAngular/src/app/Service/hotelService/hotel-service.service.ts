import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
