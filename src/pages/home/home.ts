import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PerfilCarregarPage } from '../perfil-carregar/perfil-carregar'
import { PerfilCriarPage } from '../perfil-criar/perfil.criar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {}

  criarNovoPerfil() {
    this.navCtrl.push(PerfilCriarPage);
  }

  carregarPerfil() {
    this.navCtrl.push(PerfilCarregarPage);
  }

}
