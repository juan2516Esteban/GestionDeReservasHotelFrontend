import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { HotelServiceService } from 'src/app/Service/hotelService/hotel-service.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css'],
})
export class PaginaPrincipalComponent implements OnInit {
  constructor(private service: HotelServiceService) {}

  ngOnInit(): void {
    this.obtenerHoteles();
  }

  public hoteles: any = [];

  public obtenerHoteles() {
    this.service.obtenerHoteles().subscribe((respuesta: any) => {
      this.hoteles = Array.from(respuesta);
      this.obtenerInformacion();
      this.paginatedHoteles = this.hoteles.slice(0, this.pageSize);
    });
  }

  public pageSize = 3;
  public pageSizeOptions = [3, 5, 10];
  public paginatedHoteles!: any[];

  onPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginatedHoteles = this.hoteles.slice(startIndex, endIndex);
  }

  public obtenerInformacion() {
    console.log(this.hoteles);
  }
}
