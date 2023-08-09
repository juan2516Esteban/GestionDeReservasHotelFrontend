import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HabitacionesServiceService } from 'src/app/Service/habitacionesService/habitaciones-service.service';

@Component({
  selector: 'app-view-habitaciones',
  templateUrl: './view-habitaciones.component.html',
  styleUrls: ['./view-habitaciones.component.css'],
})
export class ViewHabitacionesComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private service: HabitacionesServiceService
  ) {
    this.obtenerId();
  }

  ngOnInit(): void {
    this.obtenerHabitaciones();
  }

  public idHotel: string = '';
  public habitaciones: any[] = [];

  /* variables para el paginador */
  public pageSize = 3;
  public pageSizeOptions = [3, 5, 10];
  public paginateHabitaciones!: any[];

  public obtenerId(): string {
    this.route.paramMap.subscribe((params: any) => {
      this.idHotel = params.get('id');
    });
    return this.idHotel;
  }

  public obtenerHabitaciones() {
    this.service
      .obtenerHabitaciones(this.idHotel)
      .subscribe((respuresta: any) => {
        console.log(respuresta);

        this.habitaciones = respuresta;
        this.paginateHabitaciones = this.habitaciones.slice(0, this.pageSize);
      });
  }

  /* función para el paginador */
  onPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginateHabitaciones = this.habitaciones.slice(startIndex, endIndex);
  }
}
