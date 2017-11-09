import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { HomePage } from '../home/home';

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
        private platform: Platform
    ) {
        this.profile = this.navParams.get('profile');
        this.platform.registerBackButtonAction(() => {
            this.navCtrl.setRoot(HomePage);
        }, 0);
    }

    tempHome() {
        this.navCtrl.setRoot(HomePage);
    }

}