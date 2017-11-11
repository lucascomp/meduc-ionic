import { Component } from '@angular/core';
import { NavController, AlertController, ToastController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { PerfilMenuPage } from '../perfil-menu/perfil-menu';

import { ProfileService } from '../../providers/profile/profile.service';
import { Profile } from '../../model/profile.model';

@Component({
  selector: 'page-perfil-carregar',
  templateUrl: 'perfil-carregar.html'
})
export class PerfilCarregarPage {

  profiles: Profile[] = [];
  idSelected: number;

  constructor(
    private navCtrl: NavController,
    private profileService: ProfileService,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  ionViewDidEnter() {
    this.profileService.recuperarPerfis()
      .then(profiles => {
        if(profiles.length == 0) {
          let alert = this.alertCtrl.create({
            title: 'Ops...',
            message: 'Ainda não existem perfis criados!',
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
        else {
          this.profiles = profiles;
        }
      });
  }

  newId(id) {
    this.idSelected = id;
  }

  excluirPerfil() {
    if(this.idSelected) {
      let confirm = this.alertCtrl.create({
        title: 'Pera aí!',
        message: 'Deseja realmente excluir este perfil?',
        buttons: [
          {
            text: 'Não',
            handler: () => { }
          },
          {
            text: 'Sim',
            handler: () => {
              this.profileService.excluirPerfil(this.idSelected)
                .then(profiles => {
                  this.profiles = profiles;
                  const toast = this.toastCtrl.create({
                    message: 'O perfil foi excluído com sucesso!',
                    duration: 2000,
                    position: 'top'
                  });
                  toast.present();
                  if(this.profiles.length == 0) {
                    this.navCtrl.pop();
                  }
                });
            }
          }
        ]
      });
      confirm.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Ops...',
        message: 'Selecione algum perfil para ser excluído.',
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

  carregarPerfil() {
    if(this.idSelected) {
      let alert = this.alertCtrl.create({
        title: 'Oba!',
        message: 'Perfil carregado com sucesso!',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
              let profile = this.profiles.find(profile => {
                if(profile.id == this.idSelected) return true;
                else return false;
              });
              this.navCtrl.setPages([{ page: HomePage, params: { profile: profile } }, { page: PerfilMenuPage, params: { profile: profile } }]);
            }
          }
        ]
      });
      alert.present();
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Ops...',
        message: 'Selecione algum perfil para ser carregado.',
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