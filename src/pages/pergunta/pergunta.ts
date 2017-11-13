import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { PerfilMenuPage } from '../perfil-menu/perfil-menu';
import { PerfilNivelPage } from '../perfil-nivel/perfil-nivel';

import { ProfileService } from '../../providers/profile/profile.service';
import { QuestionService } from '../../providers/question/question.service';

import { Profile } from '../../model/profile.model';
import { Question } from '../../model/question.model';

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
        private profileService: ProfileService,
        private questionService: QuestionService
    ) {
        this.profile = this.navParams.get('profile');
    }

    ionViewDidEnter(): void {
        this.contagemInterval = setInterval(() => {
            if(--this.contador == 0) {
                this.exibirResultado(false);
            }
        }, 1000);
        this.questao = this.questionService.selecionarPergunta(this.profile.nivel, this.profile.perguntasRespondidas);
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
            setTimeout(() => {
                alert.present();
            }, 600);
        });
        clearInterval(this.contagemInterval);
    }

    voltarMenu(profile) {
        let params = {
            profile: profile
        }
        this.navCtrl.setPages([
            {
                page: HomePage
            },
            {
                page: PerfilMenuPage,
                params: params
            },
            {
                page: PerfilNivelPage,
                params: params
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