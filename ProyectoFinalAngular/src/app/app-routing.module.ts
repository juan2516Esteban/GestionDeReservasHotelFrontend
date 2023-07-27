import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './iniciarSesion/iniciar-sesion/iniciar-sesion.component';
import { RegistroUserComponent } from './registroUser/registro-user/registro-user.component';

const routes: Routes = [
  {
    path: 'loggin',
    component: IniciarSesionComponent,
  },
  {
    path: 'signUp',
    component: RegistroUserComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
