import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProfileService } from '../../providers/profile/profile.service';

@Component({
  selector: 'page-perfil-criar',
  templateUrl: 'perfil-criar.html'
})
export class PerfilCriarPage {

  nome: string;
  email: string;
  idade: number;
  instituicaoDeEnsino: string;

  constructor(public navCtrl: NavController, private profileService: ProfileService) { }

  criarPerfil(): void {
    if(this.nome && this.email && this.idade && this.instituicaoDeEnsino) {
      this.profileService.criarPerfil(this.nome, this.email, this.idade, this.instituicaoDeEnsino)
        .then(() => {
          //TODO
        });
    }
  }
}