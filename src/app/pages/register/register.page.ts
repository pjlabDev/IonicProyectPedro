import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(public auth: AuthService, public alertController: AlertController) { }

  ngOnInit() {
  }

  registrarse() {
    return this.auth.registrarse()
      .catch( async error => {
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Usuario ya existente.',
          message: 'Prueba con un correo electrónico distinto.',
          buttons: ['OK']
        });
        await alert.present();
      });
  }

}
