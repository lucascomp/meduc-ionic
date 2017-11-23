import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

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
        private navParams: NavParams
    ) {
        this.profile = this.navParams.get('profile');
    }

    iniciar(): void {
        this.navCtrl.push(PerfilNivelPage, {
            profile: this.profile
        });
    }

    nivel(): number {
        if(this.profile.nivel == 5 && this.profile.perguntasRespondidas == 10 && this.profile.respostasCertas > 6) return 6;
        return this.profile.nivel;
    }

}