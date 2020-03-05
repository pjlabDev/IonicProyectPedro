import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FireDbService } from 'src/app/services/fire-db.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-new-noticia',
  templateUrl: './new-noticia.page.html',
  styleUrls: ['./new-noticia.page.scss'],
})
export class NewNoticiaPage implements OnInit {

  noticia = [];
  key: string;
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

  addNoticia() {
    const n = {
      descrip: this.dataForm.value.descrip,
      // tslint:disable-next-line: radix
      id: (parseInt(this.noticia[this.noticia.length - 1].id) + 1),
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
      this.db.addNoticiaInSection(n, tabla);
    } else if (this.key === '2') {
      this.db.addNoticiaInSection(n, tabla2);
    } else if (this.key === '3') {
      this.db.addNoticiaInSection(n, tabla3);
    } else if (this.key === '4') {
      this.db.addNoticiaInSection(n, tabla4);
    } else if (this.key === '5') {
      this.db.addNoticiaInSection(n, tabla5);
    }
    this.dataForm.reset();
  }

}
