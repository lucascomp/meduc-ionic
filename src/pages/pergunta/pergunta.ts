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
    visualizar: any;

    constructor(
        private navCtrl: NavController,
        private navParams: NavParams,
        private alertCtrl: AlertController,
        private profileService: ProfileService,
        private questionService: QuestionService
    ) {
        this.profile = this.navParams.get('profile');
        this.visualizar = this.navParams.get('questao');
    }

    ionViewDidEnter(): void {
        if(this.visualizar) {
            this.questao = this.questionService.selecionarPergunta(this.profile.nivel, this.visualizar.questao - 1);
            this.opcaoSelecionada = this.profile.opcoesRespondidas[this.visualizar.questao - 1];
            this.respondido = true;
        }
        else {
            this.questao = this.questionService.selecionarPergunta(this.profile.nivel, this.profile.perguntasRespondidas);
        }
    }

    newOption(id: number): void {
        this.opcaoSelecionada = id;
    }

    confirmar(): void {
        if(this.respondido) {
            this.avancar();
        }
        else {
            const respostaCerta = this.respostaCerta();
            this.exibirResultado(respostaCerta);
        }
    }

    avancar(): void {
        if(this.profile.perguntasRespondidas == 10) {
            this.voltarMenu();
        }
        else {
            this.navCtrl.setRoot(PerguntaPage, {
                profile: this.profile
            });
        }
    }

    respostaCerta(): boolean {
        return this.questao.options.find(opcao => {
            if(opcao.id == this.opcaoSelecionada) return true;
            else return false;
        }).value;
    }

    exibirResultado(respostaCerta): void {
        this.salvarResposta(respostaCerta)
        .then(profile => {
            let alert = this.alertCtrl.create({
                title: respostaCerta ? '=D' : '=(',
                message: respostaCerta ? 'Parabéns, você acertou!' : 'Sinto muito, você errou.',
                buttons: [
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

    voltarMenu(): void {
        let params = {
            profile: this.profile
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
            this.profileService.salvarResposta(this.profile.id, respostaCerta, this.opcaoSelecionada)
                .then(profile => {
                    resolve(profile);
                });
        });
    }

    get titulo(): string {
        if(this.visualizar) {
            return (this.profile.nivel > 0 ? ('Nível ' + this.profile.nivel) : 'Nivelamento') + ' - Questão '  + (this.visualizar.questao < 10 ? '0' : '') + this.visualizar.questao;
        }
        else {
            return (this.profile.nivel > 0 ? ('Nível ' + this.profile.nivel) : 'Nivelamento') + ' - Questão '  + (this.profile.perguntasRespondidas < 9 ? '0' : '') + (this.profile.perguntasRespondidas + (this.respondido ? 0 : 1));
        }
    }

}