import { Component } from '@angular/core';
import { /* NavController, */ NavParams, AlertController } from 'ionic-angular';

import { Profile } from '../../model/profile.model';

@Component({
    selector: 'page-perfil-nivel',
    templateUrl: 'perfil-nivel.html'
  })
export class PerfilNivelPage {

    profile: Profile;

    constructor(
        //private navCtrl: NavController,
        private navParams: NavParams,
        private alertCtrl: AlertController
    ) {
        this.profile = this.navParams.get('profile');
    }

    responder() {
        let alert = this.alertCtrl.create({
            title: 'Ops...',
            message: 'Em construção, seus apressadinhos...',
            buttons: [
              {
                text: 'Ok',
                handler: () => { }
              }
            ]
          });
          alert.present();
    }

}