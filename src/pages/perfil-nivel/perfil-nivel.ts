import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { PerguntaPage } from '../pergunta/pergunta';

import { Profile } from '../../model/profile.model';

@Component({
    selector: 'page-perfil-nivel',
    templateUrl: 'perfil-nivel.html'
})
export class PerfilNivelPage {

    profile: Profile;

    constructor(
        private navCtrl: NavController,
        private navParams: NavParams,
        private alertCtrl: AlertController
    ) {
        this.profile = this.navParams.get('profile');
    }

    ionViewDidEnter() {
        //tratar mudança de nível;
    }

    responder() {
        let alert = this.alertCtrl.create({
            title: 'Opa!',
            message: this.profile.nivel == 0 ? `Deseja ${this.profile.perguntasRespondidas == 0 ? 'iniciar' : 'continuar'} o nivelamento?` : `Deseja ${this.profile.perguntasRespondidas == 0 ? 'iniciar' : 'continuar'} o nível ${this.profile.nivel}`,
            buttons: [
              {
                text: 'Não',
                handler: () => { }
              },
              {
                text: 'Sim',
                handler: () => {
                    this.navCtrl.setRoot(PerguntaPage, {
                        profile: this.profile
                    });
                }
              }
            ]
        });
        alert.present();
    }

}