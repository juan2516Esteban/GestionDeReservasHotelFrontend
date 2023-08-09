import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HotelServiceService } from 'src/app/Service/hotelService/hotel-service.service';
import { ActivatedRoute } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css'],
})
export class PaginaPrincipalComponent implements OnInit {
  constructor(
    private service: HotelServiceService,
    private router: Router,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.obtenerHoteles();
    this.obtenerUsuario();

    this.items = [
      {
        label: 'Crear Hotel',
        icon: 'pi pi-fw pi-home',
        items: [],
        command: () => this.navegarEntrePaginas('createHotel', this.userHotel),
      },
      {
        label: 'Crear Habitaciones',
        icon: 'pi pi-fw pi-microsoft',
        items: [],
        command: () => this.navegarEntrePaginas('createRoom', this.userHotel),
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.navegarEntrePaginas('loggin'),
      },
    ];
  }

  public hoteles: any = [];
  public responseData: any;
  public items: MenuItem[] | undefined;
  public userHotel: any | undefined;

  /* función para obtener los hoteles */
  public obtenerHoteles() {
    this.service.obtenerHoteles().subscribe((respuesta: any) => {
      this.hoteles = Array.from(respuesta);
      this.paginatedHoteles = this.hoteles.slice(0, this.pageSize);
    });
  }

  /* variables para el paginador */
  public pageSize = 3;
  public pageSizeOptions = [3, 5, 10];
  public paginatedHoteles!: any[];

  /* función para el paginador */
  onPageChange(event: any) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    this.paginatedHoteles = this.hoteles.slice(startIndex, endIndex);
  }

  public verHabitaciones(id: string) {
    this.router.navigate(['/viewHabitaciones', id]);
  }

  /* función para obtener los datos del usuario desde el loggin */
  public obtenerUsuario() {
    this.activeRouter.queryParams.subscribe((params: any) => {
      const responseData = params['responseData'];
      if (responseData) {
        this.responseData = JSON.parse(responseData);
        console.log(this.responseData);

        this.obtenerHotelPorCorreo(this.responseData.correoElectronico);
      }
    });
  }

  /* esta función es para obtener los 
  correos de los usuarios que tengan hoteles para desplegar el menu de administrador*/
  public obtenerHotelPorCorreo(correo: any) {
    this.service.obtenerHotelPorCorreo(correo).subscribe(
      (respuesta: any) => {
        this.userHotel = respuesta;
      },
      (error: any) => {
        console.error(
          'El usuario no es un usuario administardor de un hotel:',
          error
        );
      }
    );
  }

  /* esta función nos permite navigar entre paginas y enviar querys*/
  public navegarEntrePaginas(dirección: String, userHotel?: any) {
    this.router.navigate([dirección], {
      queryParams: { responseData: JSON.stringify(userHotel) },
    });
  }
}
