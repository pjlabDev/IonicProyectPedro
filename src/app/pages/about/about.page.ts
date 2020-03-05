import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  slideOpts = {
    initialSlide: 1,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
