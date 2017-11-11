import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { PerfilMenuPage } from '../perfil-menu/perfil-menu';
import { PerfilNivelPage } from '../perfil-nivel/perfil-nivel';

import { ProfileService } from '../../providers/profile/profile.service';

import { Profile } from '../../model/profile.model';
import { Question } from '../../model/question.model';
import { QUESTIONS } from '../../mock/mock-questions';

@Component({
    selector: 'page-pergunta',
    templateUrl: 'pergunta.html'
})
export class PerguntaPage {

    profile: Profile;
    contador: number = 60;
    contagemInterval: number;
    questao: Question;
    opcaoSelecionada: number;

    constructor(
        private navCtrl: NavController,
        private navParams: NavParams,
        private alertCtrl: AlertController,
        private profileService: ProfileService
    ) {
        this.profile = this.navParams.get('profile');
    }

    ionViewDidEnter(): void {
        this.contagemInterval = setInterval(() => {
            if(--this.contador == 0) {
                this.exibirResultado(false);
            }
        }, 1000);
        this.questao = this.selecionarPergunta();
    }

    selecionarPergunta(): Question {
        if(this.profile.nivel == 0) {
            return QUESTIONS[(this.profile.perguntasRespondidas/2) * 12 + (this.profile.perguntasRespondidas % 2 == 0 ? 1 : 0)];
        }
        else {
            return QUESTIONS[(this.profile.nivel - 1) * 12 + (2 + this.profile.perguntasRespondidas)];
        }
    }

    newOption(id: number): void {
        this.opcaoSelecionada = id;
    }

    confirmar(): void {
        const respostaCerta = this.questao.options.find(opcao => {
            if(opcao.id == this.opcaoSelecionada) return true;
            else return false;
        }).value;

        this.exibirResultado(respostaCerta);
    }

    exibirResultado(respostaCerta) {
        this.salvarResposta(respostaCerta)
        .then(profile => {
            let alert = this.alertCtrl.create({
                title: respostaCerta ? '=D' : '=(',
                message: respostaCerta ? 'Parabéns, você acertou!' : 'Sinto muito, ' + ( !this.contador ? 'o tempo acabou.' : 'você errou.'),
                buttons: [
                    {
                        text: 'Voltar',
                        handler: () => {
                            this.voltarMenu(profile);
                        }
                    },
                    {
                        text: 'Continuar',
                        handler: () => {
                            if(profile.perguntasRespondidas < 10) {
                                this.navCtrl.setRoot(PerguntaPage, {
                                    profile: profile
                                });
                            }
                            else {
                                this.voltarMenu(profile);
                            }
                        }
                    }
                ]
            });
            alert.present();
        });
        clearInterval(this.contagemInterval);
    }

    voltarMenu(profile) {
        this.navCtrl.setPages([
            {
                page: HomePage
            },
            {
                page: PerfilMenuPage,
                params: { profile: profile }
            },
            {
                page: PerfilNivelPage,
                params: { profile: profile }
            }
        ]);
    }

    salvarResposta(respostaCerta: boolean): Promise<Profile> {
        return new Promise(resolve => {
            this.profileService.salvarResposta(this.profile.id, respostaCerta)
                .then(profile => {
                    resolve(profile);
                });
        });
    }

}