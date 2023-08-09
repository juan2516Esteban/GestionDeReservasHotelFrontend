import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseLoggin } from '../../Web/Response/response-loggin';
import { User } from '../../Web/Models/modelUser/user';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  public urlUser = environment.UrlUser;

  public enviarResponseLoggin(responseLoggin: ResponseLoggin): Observable<any> {
    return this.http
      .get(
        this.urlUser +
          '/obtenerUserPorCorreoContrasena?correo=' +
          responseLoggin.email +
          '&contrasena=' +
          responseLoggin.contrasena
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMessage = 'El correo o la contraseña son incorrectos';
          if (error.status === 404) {
            errorMessage = 'Usuario no encontrado';
          } else if (error.status === 500) {
            errorMessage = 'Error en el servidor';
          }
          return throwError(() => new Error(errorMessage));
        })
      );
  }

  public crearUsuario(usuario: User) {
    return this.http.post(this.urlUser + '/crearUser', usuario);
  }
}
