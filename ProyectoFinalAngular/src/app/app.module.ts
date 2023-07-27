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
import { RegistroUserComponent } from './registroUser/registro-user/registro-user.component';
import { MatSelectModule } from '@angular/material/select';
import { InputMaskModule } from 'primeng/inputmask';

@NgModule({
  declarations: [AppComponent, IniciarSesionComponent, RegistroUserComponent],
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
