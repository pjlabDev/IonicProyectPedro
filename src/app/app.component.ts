import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router, RouterEvent } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'mail'
    },
    {
      title: 'Home',
      url: '/home',
      icon: 'paper-plane'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'heart'
    }
  ];

  selectedPath = '';

  constructor(private router: Router,
              private platform: Platform,
              private splashScreen: SplashScreen,
              private statusBar: StatusBar,
              public auth: AuthService) {

    this.initializeApp();
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    });

   }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
  }
}
