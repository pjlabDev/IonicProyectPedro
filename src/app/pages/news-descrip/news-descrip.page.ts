import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireDbService } from '../../services/fire-db.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-news-descrip',
  templateUrl: './news-descrip.page.html',
  styleUrls: ['./news-descrip.page.scss'],
})
export class NewsDescripPage implements OnInit {

  noticia = [];
  key: string;
  key2: string;

  constructor(public auth: AuthService, public route: ActivatedRoute, public router: Router, public db: FireDbService) { }

  ngOnInit() {
    /* Recogemos el/los id de la url que estamos mandando */
    this.route.paramMap.subscribe(response => {
      this.key = response.get('id');
      this.key2 = response.get('idd');

      /* Dependiendo el id que recojamos nos sacará las secciones de las noticias que contienen las noticias del home
      o bien nos aparecerán las misiones que podemos ver al loguearnos. */

      if (this.key === '1' && this.key2 !== null) {
        this.db.getSectionNoticia1(this.key2).subscribe(snap => {
          this.noticia = [];
          snap.forEach(n => {
            const news: any = n.payload.val();
            this.noticia.push(news);
          });
        });
      } else if (this.key === '2' && this.key2 != null) {
        this.db.getSectionNoticia2(this.key2).subscribe(snap => {
          this.noticia = [];
          snap.forEach(n => {
            const news: any = n.payload.val();
            this.noticia.push(news);
          });
        });
      } else if (this.key === '3' && this.key2 != null) {
        this.db.getSectionNoticia3(this.key2).subscribe(snap => {
          this.noticia = [];
          snap.forEach(n => {
            const news: any = n.payload.val();
            this.noticia.push(news);
          });
        });
      } else if (this.key === '4' && this.key2 != null) {
        this.db.getSectionNoticia4(this.key2).subscribe(snap => {
          this.noticia = [];
          snap.forEach(n => {
            const news: any = n.payload.val();
            this.noticia.push(news);
          });
        });
      } else if (this.key === '5' && this.key2 != null) {
        this.db.getSectionNoticia5(this.key2).subscribe(snap => {
          this.noticia = [];
          snap.forEach(n => {
            const news: any = n.payload.val();
            this.noticia.push(news);
          });
        });
      }
    });
  }

  removeNoticia() {

    const tabla = 'sectionNoticias/' + this.key2;
    const tabla2 = 'sectionNoticias2/' + this.key2;
    const tabla3 = 'sectionNoticias3/' + this.key2;
    const tabla4 = 'sectionNoticias4/' + this.key2;
    const tabla5 = 'sectionNoticias5/' + this.key2;

    if (this.key === '1') {
      this.db.removeNoticia(tabla);
    } else if (this.key === '2') {
      this.db.removeNoticia(tabla2);
    } else if (this.key === '3') {
      this.db.removeNoticia(tabla3);
    } else if (this.key === '4') {
      this.db.removeNoticia(tabla4);
    } else if (this.key === '5') {
      this.db.removeNoticia(tabla5);
    }
  }

}
