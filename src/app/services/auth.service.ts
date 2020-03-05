import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { FireDbService } from './fire-db.service';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: any;
  email: '';
  pass: '';

  constructor(public authf: AngularFireAuth,
              public db: FireDbService,
              public router: Router) { }

  /* Recogemos el authState para ver en la consola el objeto que nos devuelve si un usuario inicia sesion */
  user = this.authf.authState.pipe( map( authState => {
    console.log('authState: ', authState);
    if (authState) {
      return authState;
    } else {
      return null;
    }
  }));


    /* Método que nos loguea en firebase mediante un email y un password, acto seguido
    deja email y pass vacío y añade el usuario a la base de datos, isLoggedIn a true*/

    firebaseLogin() {
      return this.authf.auth.signInWithEmailAndPassword(this.email, this.pass)
            .then(user => {
              this.email = '';
              this.pass = '';
            });
    }

  /* Método que nos desloguea de firebase, deja email y pass vacío y la variable isLoggedIn la pone a false */
  logoutUser() {
    this.authf.auth.signOut();
    this.email = '';
    this.pass = '';
    this.router.navigate(['']);
  }

  registrarse() {
    return this.authf.auth.createUserWithEmailAndPassword(this.email, this.pass)
    .then(user => {
      this.email = '';
      this.pass = '';
      this.usuario = user.user;
      this.db.updateUserData(user.user);
      Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Genial!! Ahora logueate para navegar libremente.',
          showConfirmButton: false,
          timer: 1500
        });
    });
  }

}
