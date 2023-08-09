import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from 'src/app/Service/userService/user-service.service';
import { User } from 'src/app/Web/Models/modelUser/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-user',
  templateUrl: './registro-user.component.html',
  styleUrls: ['./registro-user.component.css'],
})
export class RegistroUserComponent {
  constructor(private service: UserServiceService, private router: Router) {}

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  public responseRegistro: any;

  registerUser = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    correoElectronico: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(12),
    ]),
    contrasena: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    documento: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(10),
    ]),
    telefono: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
    tipoDeDocumento: new FormControl('', [Validators.required]),
  });

  /* funcion para enviar los datos al servicio 
  y guardar el usuario*/
  public enviarFormulario() {
    let user: User = {
      name: this.registerUser.value.nombre || '',
      correoElectronico: this.registerUser.value.correoElectronico || '',
      password: this.registerUser.value.contrasena || '',
      documento: this.registerUser.value.documento || '',
      telefono: this.registerUser.value.telefono || '',
      tipoDeDocumento: this.registerUser.value.tipoDeDocumento || '',
    };
    this.service.crearUsuario(user).subscribe((Respuesta: any) => {
      this.responseRegistro = Respuesta;
      this.enviarloggin();
    });
  }

  public enviarloggin() {
    this.router.navigate(['/loggin']);
  }

  onKeyDown(event: any) {
    const allowedChars = /[0-9]/; // Expresión regular para permitir solo números
    const inputChar = event.key;

    if (event.key === 'Backspace') {
      return;
    }

    if (!allowedChars.test(inputChar)) {
      event.preventDefault(); // Cancela el evento si se ingresa una letra
    }
  }
}
