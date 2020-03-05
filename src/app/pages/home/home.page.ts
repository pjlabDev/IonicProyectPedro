import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { FireDbService } from '../../services/fire-db.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  noticias: any[];

  constructor(private menuCtrl: MenuController, public db: FireDbService) { }

  ngOnInit() {
    /* Metdodo que nos devuelve las Noticias para la pagina del home */
    this.db.getNoticiasHome().subscribe(snap => {
      this.noticias = [];
      snap.forEach(n => {
        const noticia: any = n.payload.val();
        noticia.key = n.key;
        this.noticias.push(noticia);
      });
    });
  }

  openMenu() {
    this.menuCtrl.toggle();
  }

}
