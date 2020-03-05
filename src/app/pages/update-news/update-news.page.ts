import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireDbService } from 'src/app/services/fire-db.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update-news',
  templateUrl: './update-news.page.html',
  styleUrls: ['./update-news.page.scss'],
})
export class UpdateNewsPage implements OnInit {

  noticia = [];
  key: string;
  key2: string;
  dataForm: FormGroup;

  constructor(public route: ActivatedRoute, public router: Router, public db: FireDbService, public alertController: AlertController) {
    this.dataForm = new FormGroup({
      titulo: new FormControl('', [Validators.required]),
      id: new FormControl('', [Validators.required]),
      subtitulo: new FormControl('', [Validators.required]),
      descrip: new FormControl('', [Validators.required]),
      imagen: new FormControl('', [Validators.required]),
      imagen2: new FormControl('', [Validators.required])
    });
  }

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

  /* Método para modificar una noticia de cualquier sección, creo una nueva noticia con los datos recogidos del formulario,
  y creo 5 variables llamadas "tablas" que serán el path para indicar que noticia concreta quiero modificar.
  Acto seguido, modifico dicha noticia, dependiendo del id de la sección a la que pertenece. */

  updateNoticia() {
    const n = {
      descrip: this.dataForm.value.descrip,
      id: this.key2,
      imagen: this.dataForm.value.imagen,
      imagen2: this.dataForm.value.imagen2,
      subtitulo: this.dataForm.value.subtitulo,
      titulo: this.dataForm.value.titulo
    };
    const tabla = 'sectionNoticias/' + n.id;
    const tabla2 = 'sectionNoticias2/' + n.id;
    const tabla3 = 'sectionNoticias3/' + n.id;
    const tabla4 = 'sectionNoticias4/' + n.id;
    const tabla5 = 'sectionNoticias5/' + n.id;

    if (this.key === '1') {
      this.db.updateNoticiaInSection(n, tabla);
    } else if (this.key === '2') {
      this.db.updateNoticiaInSection(n, tabla2);
    } else if (this.key === '3') {
      this.db.updateNoticiaInSection(n, tabla3);
    } else if (this.key === '4') {
      this.db.updateNoticiaInSection(n, tabla4);
    } else if (this.key === '5') {
      this.db.updateNoticiaInSection(n, tabla5);
    }
    this.dataForm.reset();
  }

}
