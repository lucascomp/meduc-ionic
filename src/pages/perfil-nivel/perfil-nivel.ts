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
        if(!this.navParams.get('nivel')) {
            if(this.profile.perguntasRespondidas(this.profile.nivel) == 10) {
                if(this.profile.nivel == 0) {
                    if(!this.profile.respostasNv0[0] || !this.profile.respostasNv0[1]) {
                        this.finalizarNivel(1, true);
                    }
                    else if(!this.profile.respostasNv0[2] || !this.profile.respostasNv0[3]) {
                        this.finalizarNivel(2, true);
                    }
                    else if(!this.profile.respostasNv0[4] || !this.profile.respostasNv0[5]) {
                        this.finalizarNivel(3, true);
                    }
                    else if(!this.profile.respostasNv0[6] || !this.profile.respostasNv0[7]) {
                        this.finalizarNivel(4, true);
                    }
                    else {
                        this.finalizarNivel(5, true);
                    }
                }
                else {
                    if(this.profile.respostasCertas(this.profile.nivel) > 6) {
                        if(this.profile.nivel == 5) {
                            this.exibirAlerta('Parabéns!', `Você finalizou o jogo!<br><br>
                                                            Item adicionado ao consultório:<br>
                                                            - Plantas e decoração`, [
                                {
                                    text: 'Ok',
                                    handler: () => {}
                                }
                            ]);
                        }
                        else {
                        this.finalizarNivel(this.profile.nivel + 1, false);
                        }
                    }
                    else {
                        this.finalizarNivel(this.profile.nivel, false);
                    }
                }
            }
        }
    }

    finalizarNivel(nivel: number, nivelamento: boolean): void {
        let title;
        let message;
        if(nivelamento) {
            title = 'Resultado';
            message =  `Você alcançou o nível ${nivel}!<br><br>
                        Ite${nivel > 1 ? 'ns' : 'm'} adicionado${nivel > 1 ? 's' : ''} ao consultório:<br>
                        - Maca<br>
         ${nivel > 1 ? `- Cadeira para exames<br>
         ${nivel > 2 ? `- Máquina para exames<br>
         ${nivel > 3 ? `- Computador para exames<br>
         ${nivel > 4 ? `- Televisão` : ''}` : ''}` : ''}` : ''}`;
        }
        else {
            if(this.profile.nivel < nivel) {
                title = '=)';
                message =  `Parabéns, você subiu para o nível ${nivel}!<br><br>
                            Item adicionado ao consultório:<br>
                            - ${nivel == 2 ? 'Cadeira para exames' : (
                                nivel == 3 ? 'Máquina para exames' : (
                                nivel == 4 ? 'Computador para exames' : (
                                nivel == 5 ? 'Televisão' : '' )))}`;
            }
            else if(this.profile.reforco < 2 || this.profile.nivel == 1) {
                title = '=(';
                message = `Você não finalizou o nível. Será necessário fazer um reforço.`;
            }
            else {
                title = '=(';
                message =  `Você foi rebaixado para o nível ${this.profile.nivel - 1}.
                            ${this.profile.nivel == 5 ? `<br><br>Foi retirado:<br>- Televisão` :
                            `${this.profile.nivel == 4 ? `<br><br>Foi retirado:<br>- Computador para exames` : 
                            `${this.profile.nivel == 3 ? `<br><br>Foi retirado:<br>- Máquina para exames` : 
                            `${this.profile.nivel == 2 ? `<br><br>Foi retirado:<br>- Cadeira para exames` : ''}`}`}`}`;
            }
        }
        this.exibirAlerta(title, message, [
            {
                text: 'Ok',
                handler: () => {}
            }
        ]);
        this.estabelecerNovoNivel(nivel);
    }

    estabelecerNovoNivel(nivel: number): void {
        this.profileService.estabelecerNivel(this.profile.id, nivel)
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
        this.exibirAlerta('Opa!', this.profile.nivel == 0 ? `Deseja ${this.profile.perguntasRespondidas(this.profile.nivel) == 0 ? 'iniciar' : 'continuar'} o nivelamento?` : `Deseja ${this.profile.perguntasRespondidas(this.profile.nivel) == 0 ? 'iniciar' : 'continuar'} o nível ${this.profile.nivel}`, [
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

    verPergunta(question: number, nivel: number): void {
        this.navCtrl.push(PerguntaPage, {
            profile: this.profile,
            nivel: nivel,
            questao: {
                questao: question,
            }
        });
    }

    get historico() {
        return this.navParams.get('nivel');
    }
}