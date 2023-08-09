import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Service/userService/user-service.service';
import { Router } from '@angular/router';
import { ResponseLoggin } from 'src/app/Web/Response/response-loggin';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent {
  constructor(private service: UserServiceService, private router: Router) {}

  public responseService: any = null;
  public errorMessages: any = null;

  formLoggin = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(12),
    ]),
    contrasena: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  enviarResponseLogin() {
    let responseLoggin: ResponseLoggin = {
      email: this.formLoggin.value.email || '',
      contrasena: this.formLoggin.value.contrasena || '',
    };
    this.service.enviarResponseLoggin(responseLoggin).subscribe(
      (Respuesta: any) => {
        this.responseService = Respuesta;
        this.enviarUsuario(this.responseService);
      },
      (error: any) => {
        console.error('Error al obtener los datos del usuario:', error);
        this.errorMessages =
          'El usuario no a sido registrado o la contraseña o correo es incorrecta';
      }
    );
  }

  public enviarUsuario(usuario: any) {
    this.router.navigate(['/paginaPrincipal'], {
      queryParams: { responseData: JSON.stringify(usuario) },
    });
  }

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  value = 'password';
}
