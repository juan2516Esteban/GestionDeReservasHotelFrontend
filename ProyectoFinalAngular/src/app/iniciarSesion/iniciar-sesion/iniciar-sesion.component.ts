import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Service/user-service.service';
import { ResponseLoggin } from 'src/app/Web/Response/response-loggin';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css'],
})
export class IniciarSesionComponent {
  constructor(private service: UserServiceService) {}

  public responseService: any;

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
    this.service
      .enviarResponseLoggin(responseLoggin)
      .subscribe((Respuesta: any) => {
        this.responseService = Respuesta;
        this.mostrarMensaje();
      });
  }

  public mostrarMensaje() {
    console.log(this.responseService);
  }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  value = 'password';
}
