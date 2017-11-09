import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { PerfilMenuPage } from '../perfil-menu/perfil-menu';

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

  constructor(
    private navCtrl: NavController,
    private profileService: ProfileService,
    private alertCtrl: AlertController
  ) { }

  ionViewDidEnter() {
    this.profileService.recuperarPerfis()
    .then(profiles => {
      if(profiles.length == 3) {
        let alert = this.alertCtrl.create({
          title: 'Ops...',
          message: 'Você já atingiu o limite de perfis!',
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.navCtrl.pop();
              }
            }
          ]
        });
        alert.present();
      }
    });
  }

  criarPerfil(): void {
    if(this.nome && this.email && this.idade && this.instituicaoDeEnsino) {
      this.profileService.criarPerfil({
        _nome: this.nome,
        _email: this.email,
        _idade: this.idade,
        _instituicaoDeEnsino: this.instituicaoDeEnsino
      })
        .then(profile => {
          let prompt = this.alertCtrl.create({
            title: 'Oba!',
            message: 'Perfil criado com sucesso!',
            buttons: [
              {
                text: 'Ok',
                handler: data => {
                  this.navCtrl.setRoot(PerfilMenuPage, {
                    profile: profile
                  });
                }
              }
            ]
          });
          prompt.present();
        });
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Ops...',
        message: 'É necessário preencher todos os campos.',
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
}