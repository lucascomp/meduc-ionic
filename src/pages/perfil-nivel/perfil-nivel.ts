import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { PerguntaPage } from '../pergunta/pergunta';

import { ProfileService } from '../../providers/profile/profile.service';

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
        private alertCtrl: AlertController,
        private profileService: ProfileService
    ) {
        this.profile = this.navParams.get('profile');
    }

    ionViewDidEnter() {
        if(this.profile.perguntasRespondidas == 10) {
            if(this.profile.nivel == 0) {
                if(!this.profile.respostas[0] || !this.profile.respostas[1]) {
                    this.finalizarNivel(1, true);
                }
                else if(!this.profile.respostas[2] || !this.profile.respostas[3]) {
                    this.finalizarNivel(2, true);
                }
                else if(!this.profile.respostas[4] || !this.profile.respostas[5]) {
                    this.finalizarNivel(3, true);
                }
                else if(!this.profile.respostas[6] || !this.profile.respostas[7]) {
                    this.finalizarNivel(4, true);
                }
                else if(!this.profile.respostas[8] || !this.profile.respostas[9]) {
                    this.finalizarNivel(5, true);
                }
            }
            else {
                if(this.profile.respostasCertas > 6) {
                    if(this.profile.nivel == 5) {
                        this.exibirAlerta('PARABÉNS!', 'VOCÊ FINALIZOU O JOGO!', [
                            {
                                text: 'Ok',
                                handler: () => { }
                            }
                        ]);
                    }
                    else {
                    this.finalizarNivel(this.profile.nivel + 1, false);
                    }
                }
                else if(this.profile.respostasCertas > 4) {
                    this.finalizarNivel(this.profile.nivel, false);
                }
                else {
                    this.finalizarNivel((this.profile.nivel - 1) != 0 ? (this.profile.nivel - 1) : 1, false);
                }
            }
        }
    }

    finalizarNivel(nivel: number, nivelamento: boolean): void {
        if(nivelamento) {
            this.exibirAlerta('Resultado', `Você alcançou o nível ${nivel}!`, [
                {
                    text: 'Ok',
                    handler: () => {
                        this.estabelecerNovoNivel(nivel);
                    }
                }
            ]);
        }
        else {
            if(this.profile.nivel > nivel) {
                this.exibirAlerta('=(', 'Que pena, você caiu de nível.', [
                {
                    text: 'Ok',
                    handler: () => {
                        this.estabelecerNovoNivel(nivel);
                    }
                }
            ]);
            }
            else if(this.profile.nivel < nivel) {
                this.exibirAlerta('=)', 'Parabéns, você subiu de nível!', [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.estabelecerNovoNivel(nivel);
                        }
                    }
                ]);
            }
            else {
                this.exibirAlerta('=(', 'Você não finalizou o nível. Será necessário fazer um reforço.', [
                    {
                        text: 'Ok',
                        handler: () => {
                            this.estabelecerNovoNivel(nivel);
                        }
                    }
                ]);
            }
        }
    }

    estabelecerNovoNivel(novoNivel: number): void {
        this.profileService.estabelecerNivel(this.profile.id, novoNivel)
        .then(newProfile => {
            this.profile = newProfile;
            this.navParams.data.profile = newProfile;
        })
    }

    exibirAlerta(title: string, message: string, buttons: Object[]) {
        let alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: buttons
        });
        alert.present();
    }

    responder() {
        this.exibirAlerta('Opa!', this.profile.nivel == 0 ? `Deseja ${this.profile.perguntasRespondidas == 0 ? 'iniciar' : 'continuar'} o nivelamento?` : `Deseja ${this.profile.perguntasRespondidas == 0 ? 'iniciar' : 'continuar'} o nível ${this.profile.nivel}`, [
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
        ]);
    }
}