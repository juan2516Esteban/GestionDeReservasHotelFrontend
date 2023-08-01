import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ResponseLoggin } from '../../Web/Response/response-loggin';
import { User } from '../../Web/Models/modelUser/user';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}

  public urlUser = environment.UrlUser;

  public enviarResponseLoggin(responseLoggin: ResponseLoggin) {
    return this.http.get(
      this.urlUser +
        '/obtenerUserPorCorreoContrasena?correo=' +
        responseLoggin.email +
        '&contrasena=' +
        responseLoggin.contrasena
    );
  }

  public crearUsuario(usuario: User) {
    return this.http.post(this.urlUser + '/crearUser', usuario);
  }
}
