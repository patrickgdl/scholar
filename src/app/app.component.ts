import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { SwUpdate } from "@angular/service-worker";

import { Platform, ToastController } from "@ionic/angular";

import { StatusBar } from "@capacitor/status-bar";
import { SplashScreen } from "@capacitor/splash-screen";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: "Horário",
      url: "/app/tabs/schedule",
      icon: "calendar",
    },
    {
      title: "Aluno",
      url: "/app/tabs/student",
      icon: "people",
    },
    {
      title: "Mapa",
      url: "/app/tabs/map",
      icon: "map",
    },
    {
      title: "Sobre",
      url: "/app/tabs/about",
      icon: "information-circle",
    },
  ];
  loggedIn = false;
  dark = false;

  constructor(
    private platform: Platform,
    private router: Router,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    this.swUpdate.available.subscribe(async (res) => {
      const toast = await this.toastCtrl.create({
        message: "Atualização disponível!",
        position: "bottom",
        buttons: [
          {
            role: "cancel",
            text: "Recarregar",
          },
        ],
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is("hybrid")) {
        StatusBar.hide();
        SplashScreen.hide();
      }
    });
  }

  logout() {
    this.router.navigateByUrl("/app/tabs/schedule");
  }
}
