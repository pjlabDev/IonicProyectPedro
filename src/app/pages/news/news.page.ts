import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireDbService } from '../../services/fire-db.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  noticia = [];
  key: string;

  constructor(public auth: AuthService, public route: ActivatedRoute, public router: Router, public db: FireDbService) { }

  ngOnInit() {
    /* Recogemos el id de la url que estamos mandando */
    this.route.paramMap.subscribe(response => {
      this.key = response.get('id');
    });

    if (this.key === '1') {
      this.db.getSectionNoticias1().subscribe(snap => {
        this.noticia = [];
        snap.forEach(n => {
          const news: any = n.payload.val();
          this.noticia.push(news);
        });
      });
    } else if (this.key === '2') {
      this.db.getSectionNoticias2().subscribe(snap => {
        this.noticia = [];
        snap.forEach(n => {
          const news: any = n.payload.val();
          this.noticia.push(news);
        });
      });
    } else if (this.key === '3') {
      this.db.getSectionNoticias3().subscribe(snap => {
        this.noticia = [];
        snap.forEach(n => {
          const news: any = n.payload.val();
          this.noticia.push(news);
        });
      });
    } else if (this.key === '4') {
      this.db.getSectionNoticias4().subscribe(snap => {
        this.noticia = [];
        snap.forEach(n => {
          const news: any = n.payload.val();
          this.noticia.push(news);
        });
      });
    } else if (this.key === '5') {
      this.db.getSectionNoticias5().subscribe(snap => {
        this.noticia = [];
        snap.forEach(n => {
          const news: any = n.payload.val();
          this.noticia.push(news);
        });
      });
    } else {
      console.log('ERROR');
    }

  }

}
