import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { PerfilNivelPage } from '../perfil-nivel/perfil-nivel';

import { Profile } from '../../model/profile.model';

@Component({
    selector: 'page-perfil-menu',
    templateUrl: 'perfil-menu.html'
})
export class PerfilMenuPage {

    profile: Profile;

    constructor(
        private navCtrl: NavController,
        private navParams: NavParams,
        private alertCtrl: AlertController
    ) {
        this.profile = this.navParams.get('profile');
    }

    iniciar(): void {
        this.navCtrl.push(PerfilNivelPage, {
            profile: this.profile
        });
    }

    historico(nivel): void {
        if(this.profile.nivel == nivel) {
            this.iniciar();
        }
        else {
            switch(nivel) {
                case 1: {
                    if(this.profile.respostasNv1.length == 0) {
                        this.nivelPulado();
                    }
                    else {
                        this.goHistorico(nivel);
                    }
                    break;
                }
                case 2: {
                    if(this.profile.respostasNv2.length == 0) {
                        this.nivelPulado();
                    }
                    else {
                        this.goHistorico(nivel);
                    }
                    break;
                }
                case 3: {
                    if(this.profile.respostasNv3.length == 0) {
                        this.nivelPulado();
                    }
                    else {
                        this.goHistorico(nivel);
                    }
                    break;
                }
                case 4: {
                    if(this.profile.respostasNv4.length == 0) {
                        this.nivelPulado();
                    }
                    else {
                        this.goHistorico(nivel);
                    }
                    break;
                }
                case 5: {
                    if(this.profile.respostasNv5.length == 0) {
                        this.nivelPulado();
                    }
                    else {
                        this.goHistorico(nivel);
                    }
                    break;
                }
            }
        }
    }

    goHistorico(nivel): void {
        this.navCtrl.push(PerfilNivelPage, {
            profile: this.profile,
            nivel: nivel
        });
    }

    nivelPulado(): void {
        let alert = this.alertCtrl.create({
            title: 'Ops...',
            message: 'Você não tem histórico neste nível, pois você foi nivelado em um nível superior!',
            buttons: [
              {
                text: 'Ok',
                handler: () => {}
              }
            ]
        });
        alert.present();
    }

    nivel(): number {
        if(this.profile.nivel == 5 && this.profile.perguntasRespondidas(this.profile.nivel) == 10 && this.profile.respostasCertas(this.profile.nivel) > 6) return 6;
        return this.profile.nivel;
    }
}