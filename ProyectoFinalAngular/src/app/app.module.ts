import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './iniciarSesion/iniciar-sesion/iniciar-sesion.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { RegistroUserComponent } from './registroUser/registro-user.component';
import { MatSelectModule } from '@angular/material/select';
import { InputMaskModule } from 'primeng/inputmask';
import { CrearHotelComponent } from './moduloAdministrador/crear-hotel/crear-hotel.component';
import { CrearHabitacionComponent } from './moduloAdministrador/crearHabitacion/crear-habitacion.component';
import { MatStepperModule } from '@angular/material/stepper';
import { PipePrecioPipe } from './Pipes/pipePrecio/pipe-precio.pipe';
import { PaginaPrincipalComponent } from './paginaPrincipal/pagina-principal/pagina-principal.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CardModule } from 'primeng/card';
import { ViewHabitacionesComponent } from './viewHabitaciones/view-habitaciones/view-habitaciones.component';
import { ButtonModule } from 'primeng/button';
import { TieredMenuModule } from 'primeng/tieredmenu';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    RegistroUserComponent,
    CrearHotelComponent,
    CrearHabitacionComponent,
    PipePrecioPipe,
    PaginaPrincipalComponent,
    ViewHabitacionesComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    InputMaskModule,
    MatStepperModule,
    MatPaginatorModule,
    CardModule,
    ButtonModule,
    TieredMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
