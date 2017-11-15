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
    questao: Question;
    opcaoSelecionada: number;
    respondido: boolean;

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
        this.questao = this.questionService.selecionarPergunta(this.profile.nivel, this.profile.perguntasRespondidas);
    }

    newOption(id: number): void {
        this.opcaoSelecionada = id;
    }

    confirmar(): void {
        if(this.respondido) {
            this.voltarMenu(this.profile);
        }
        else {
            const respostaCerta = this.respostaCerta();
            this.exibirResultado(respostaCerta);
        }
    }

    respostaCerta(): boolean {
        return this.questao.options.find(opcao => {
            if(opcao.id == this.opcaoSelecionada) return true;
            else return false;
        }).value;
    }

    exibirResultado(respostaCerta) {
        this.salvarResposta(respostaCerta)
        .then(profile => {
            let alert = this.alertCtrl.create({
                title: respostaCerta ? '=D' : '=(',
                message: respostaCerta ? 'Parabéns, você acertou!' : 'Sinto muito, você errou.',
                buttons: [
                    {
                        text: 'Voltar',
                        handler: () => {
                            this.voltarMenu(profile);
                        }
                    },
                    {
                        text: 'Ok',
                        handler: () => {
                            this.profile = profile;
                            this.respondido = true;
                        }
                    }
                ]
            });
            setTimeout(() => {
                alert.present();
            }, 600);
        });
    }

    voltarMenu(profile) {
        if(profile.perguntasRespondidas < 10) {
            this.navCtrl.setRoot(PerguntaPage, {
                profile: profile
            });
        }
        else {
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