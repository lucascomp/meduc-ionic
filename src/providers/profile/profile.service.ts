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
            let loading = this.loadingCtrl.create({
                content: 'Carregando...'
            });
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
            let loading = this.loadingCtrl.create({
                content: 'Carregando...'
            });
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

    excluirPerfil(id: number): Promise<{}> {
        return new Promise(resolve => {
            let loading = this.loadingCtrl.create({
                content: 'Carregando...'
            });
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
                                    resolve();
                                });
                        });
                });
        });
    }

    subirNivel(id: number): Promise<{}> {
        return new Promise(resolve => {
            let loading = this.loadingCtrl.create({
                content: 'Carregando...'
            });
            this.recuperarPerfis()
                .then(profiles => {
                    profiles.forEach(profile => {
                        if(profile.id == id)
                            profile.nivel++;
                        return true;
                    });
                    this.storage.ready()
                        .then(() => {
                            this.storage.set(this.profileKey, profiles)
                                .then(() => {
                                    loading.dismiss();
                                    resolve();
                                });
                        });
                });
        });
    }

    descerNivel(id: number): Promise<{}> {
        return new Promise(resolve => {
            let loading = this.loadingCtrl.create({
                content: 'Carregando...'
            });
            this.recuperarPerfis()
                .then(profiles => {
                    profiles.forEach(profile => {
                        if(profile.id == id)
                            profile.nivel--;
                        return true;
                    });
                    this.storage.ready()
                        .then(() => {
                            this.storage.set(this.profileKey, profiles)
                                .then(() => {
                                    loading.dismiss();
                                    resolve();
                                });
                        });
                });
        });
    }
 }