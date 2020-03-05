import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FireDbService {

  constructor(private db: AngularFireDatabase, public alertController: AlertController, public loadingController: LoadingController) { }

  /* Método que carga un usuario a la base de datos de firebase */
  updateUserData(user: any) {
    console.log('user: ', user);
    const path = 'users/' + user.uid;
    const u = {
      email: user.email
    };
    this.db.object(path).update(u).catch(error => console.log(error));
}

  /* Método que nos devuelve las noticias del Home */
  getNoticiasHome() {
    const path = 'noticias/';
    return this.db.list(path).snapshotChanges();
  }

  /* Método que nos devuelve la sección de las noticias dependiendo del id de la noticia padre del home. */
  getSectionNoticias1() {
    const path = 'sectionNoticias/';
    return this.db.list(path).snapshotChanges();
  }

  getSectionNoticias2() {
    const path = 'sectionNoticias2/';
    return this.db.list(path).snapshotChanges();
  }

  getSectionNoticias3() {
    const path = 'sectionNoticias3/';
    return this.db.list(path).snapshotChanges();
  }

  getSectionNoticias4() {
    const path = 'sectionNoticias4/';
    return this.db.list(path).snapshotChanges();
  }

  getSectionNoticias5() {
    const path = 'sectionNoticias5/';
    return this.db.list(path).snapshotChanges();
  }

  /* Método que nos devuelve el desarrollo de la noticia que tenga su id igual a idd */

  getSectionNoticia1(idd) {
    const path = 'sectionNoticias/' + idd;
    return this.db.list(path).snapshotChanges();
  }

  getSectionNoticia2(idd) {
    const path = 'sectionNoticias2/' + idd;
    return this.db.list(path).snapshotChanges();
  }

  getSectionNoticia3(idd) {
    const path = 'sectionNoticias3/' + idd;
    return this.db.list(path).snapshotChanges();
  }

  getSectionNoticia4(idd) {
    const path = 'sectionNoticias4/' + idd;
    return this.db.list(path).snapshotChanges();
  }

  getSectionNoticia5(idd) {
    const path = 'sectionNoticias5/' + idd;
    return this.db.list(path).snapshotChanges();
  }

  /* Método para añadir noticias a las secciones de base de datos,
  con dos alert, uno para que aparezca un loading y otro, un alert de confirmación normal */

  addNoticiaInSection(noticia: any, tabla: any) {
    const n = {
      descrip: noticia.descrip,
      id: noticia.id,
      imagen: noticia.imagen,
      imagen2: noticia.imagen2,
      subtitulo: noticia.subtitulo,
      titulo: noticia.titulo
    };
    return this.db.object(tabla).update(n).then(async res => {
      const loading = await this.loadingController.create({
        message: 'Espere un momento...',
        duration: 3000
      });
      await loading.present();
      const alert = await this.alertController.create({
        header: 'Bien!',
        subHeader: 'Has añadido una nueva noticia.',
        buttons: ['OK']
      });
      await alert.present();
    });
  }

  /* Método para modificar noticias de las secciones de base de datos, con dos alert,
    uno para que aparezca un loading y otro, un alert de confirmación normal */

  updateNoticiaInSection(noticia: any, tabla: any) {
    const n = {
      descrip: noticia.descrip,
      id: noticia.id,
      imagen: noticia.imagen,
      imagen2: noticia.imagen2,
      subtitulo: noticia.subtitulo,
      titulo: noticia.titulo
    };
    return this.db.object(tabla).update(n).then(async res => {
      const loading = await this.loadingController.create({
        message: 'Espere un momento...',
        duration: 3000
      });
      await loading.present();
      const alert = await this.alertController.create({
        header: 'Genial!',
        subHeader: 'Has modifiacdo la noticia.',
        buttons: ['OK']
      });
      await alert.present();
    });
  }

  /* Método para borrar noticias de las secciones de base de datos, con dos alert,
    uno para que aparezca un loading y otro, un alert de confirmación normal */

  removeNoticia(tabla: any) {
    return this.db.object(tabla).remove().then(async res => {
      const loading = await this.loadingController.create({
        message: 'Espere un momento...',
        duration: 3000
      });
      await loading.present();
      const alert = await this.alertController.create({
        header: 'Bien!',
        subHeader: 'Has eliminado una noticia.',
        buttons: ['OK']
      });
      await alert.present();
    });
  }

}
