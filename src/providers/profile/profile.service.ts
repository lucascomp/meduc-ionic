import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';

import { Profile } from '../../model/profile.model';

@Injectable()
export class ProfileService {

    private profileKey: string = 'profileKey';
    
    constructor(private storage: Storage, private loadingCtrl: LoadingController) { }

    criarPerfil(profile): Promise<Profile> {
        return new Promise(resolve => {
            let loading = this.loadingCtrl.create({});
            loading.present();
            this.recuperarPerfis()
                .then(profiles => {
                    profiles = profiles || [];
                    profile.id = profiles.length + 1;
                    profile.nivel = 0;
                    let newProfile = new Profile(profile);
                    profiles.push(newProfile);
                    this.storage.ready()
                        .then(() => {
                            this.storage.set(this.profileKey, profiles)
                                .then(() => {
                                    loading.dismiss();
                                    resolve(newProfile);
                                })
                        })
                })
        });
    }

    recuperarPerfis(): Promise<Profile[]> {
        return new Promise(resolve => {
            let loading = this.loadingCtrl.create({});
            loading.present();
            this.storage.ready()
                .then(() => {
                    this.storage.get(this.profileKey)
                        .then(storedProfiles => {
                            storedProfiles = storedProfiles || [];
                            let profiles: Profile[] = [];
                            storedProfiles.forEach(storedProfile => {
                                profiles.push(new Profile(storedProfile));
                            });
                            loading.dismiss();
                            resolve(profiles);
                        });
                });
        });
    }

    excluirPerfil(id: number): Promise<Profile[]> {
        return new Promise(resolve => {
            let loading = this.loadingCtrl.create({});
            loading.present();
            this.recuperarPerfis()
                .then(profiles => {
                    profiles = profiles.filter(profile => {
                        if(profile.id == id) return false;
                        else return true;
                    });
                    profiles.forEach((profile, index) => {
                        if(profile.id != index + 1) profile.id = index + 1;
                    });
                    this.storage.ready()
                        .then(() => {
                            this.storage.set(this.profileKey, profiles)
                                .then(() => {
                                    loading.dismiss();
                                    resolve(profiles);
                                });
                        });
                });
        });
    }

    estabelecerNivel(id: number, nivel: number): Promise<Profile> {
        return new Promise(resolve => {
            let loading = this.loadingCtrl.create({});
            loading.present();
            this.recuperarPerfis()
                .then(profiles => {
                    let newProfile;
                    profiles.forEach(profile => {
                        if(profile.id == id) {
                            if(profile.nivel == 0) {
                                profile.nivel = nivel;
                            }
                            else if(profile.nivel == nivel) {
                                if(profile.nivel != 1) {
                                    if(profile.reforco < 2) {
                                        profile.reforco++;
                                    }
                                    else {
                                        profile.nivel = nivel - 1;
                                        profile.reforco = 0;
                                    }
                                }
                            }
                            else {
                                profile.nivel++;
                                profile.reforco = 0;
                            }
                            switch(profile.nivel) {
                                case 1: {
                                    profile.respostasNv1 = [];
                                    profile.opcoesRespondidasNv1 = [];
                                    break;
                                }
                                case 2: {
                                    profile.respostasNv2 = [];
                                    profile.opcoesRespondidasNv2 = [];
                                    break;
                                }
                                case 3: {
                                    profile.respostasNv3 = [];
                                    profile.opcoesRespondidasNv3 = [];
                                    break;
                                }
                                case 4: {
                                    profile.respostasNv4 = [];
                                    profile.opcoesRespondidasNv4 = [];
                                    break;
                                }
                                case 5: {
                                    profile.respostasNv5 = [];
                                    profile.opcoesRespondidasNv5 = [];
                                    break;
                                }
                            }
                            newProfile = profile;
                        }
                    });
                    this.storage.ready()
                        .then(() => {
                            this.storage.set(this.profileKey, profiles)
                                .then(() => {
                                    loading.dismiss();
                                    resolve(newProfile);
                                });
                        });
                });
        });
    }

    salvarResposta(id: number, respostaCerta: boolean, idOpcaoRespondida: number): Promise<Profile> {
        return new Promise(resolve => {
            let loading = this.loadingCtrl.create({});
            loading.present();
            this.recuperarPerfis()
                .then(profiles => {
                    let newProfile;
                    profiles.forEach(profile => {
                        if(profile.id == id) {
                            switch(profile.nivel) {
                                case 0: {
                                    profile.respostasNv0.push(respostaCerta);
                                    profile.opcoesRespondidasNv0.push(idOpcaoRespondida);
                                    break;
                                }
                                case 1: {
                                    profile.respostasNv1.push(respostaCerta);
                                    profile.opcoesRespondidasNv1.push(idOpcaoRespondida);
                                    break;
                                }
                                case 2: {
                                    profile.respostasNv2.push(respostaCerta);
                                    profile.opcoesRespondidasNv2.push(idOpcaoRespondida);
                                    break;
                                }
                                case 3: {
                                    profile.respostasNv3.push(respostaCerta);
                                    profile.opcoesRespondidasNv3.push(idOpcaoRespondida);
                                    break;
                                }
                                case 4: {
                                    profile.respostasNv4.push(respostaCerta);
                                    profile.opcoesRespondidasNv4.push(idOpcaoRespondida);
                                    break;
                                }
                                case 5: {
                                    profile.respostasNv5.push(respostaCerta);
                                    profile.opcoesRespondidasNv5.push(idOpcaoRespondida);
                                    break;
                                }
                            }
                            newProfile = profile;
                        }
                    });
                    this.storage.ready()
                    .then(() => {
                        this.storage.set(this.profileKey, profiles)
                            .then(() => {
                                loading.dismiss();
                                resolve(newProfile);
                            });
                    });
                });
        });
    }
 }