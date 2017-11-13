import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PerfilNivelPage } from '../perfil-nivel/perfil-nivel';
import { ConsultorioPage } from '../consultorio/consultorio';

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

    iniciar() {
        this.navCtrl.push(PerfilNivelPage, {
            profile: this.profile
        });
    }

    consultorio() {
        this.navCtrl.push(ConsultorioPage, {
            nivel: this.profile.nivel
        });
    }

}