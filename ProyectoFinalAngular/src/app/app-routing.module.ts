import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './iniciarSesion/iniciar-sesion/iniciar-sesion.component';
import { RegistroUserComponent } from './registroUser/registro-user.component';
import { CrearHotelComponent } from './moduloAdministrador/crear-hotel/crear-hotel.component';
import { CrearHabitacionComponent } from './moduloAdministrador/crearHabitacion/crear-habitacion.component';
import { PaginaPrincipalComponent } from './paginaPrincipal/pagina-principal/pagina-principal.component';
import { ViewHabitacionesComponent } from './viewHabitaciones/view-habitaciones/view-habitaciones.component';

const routes: Routes = [
  {
    path: 'loggin',
    component: IniciarSesionComponent,
  },
  {
    path: 'signUp',
    component: RegistroUserComponent,
  },
  {
    path: 'createHotel',
    component: CrearHotelComponent,
  },
  {
    path: 'createRoom',
    component: CrearHabitacionComponent,
  },
  {
    path: 'paginaPrincipal',
    component: PaginaPrincipalComponent,
  },
  {
    path: 'viewHabitaciones/:id',
    component: ViewHabitacionesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
