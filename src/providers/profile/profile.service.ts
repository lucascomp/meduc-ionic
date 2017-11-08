import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Profile } from '../../model/profile.model';

@Injectable()
export class ProfileService {

    private profileKey: string = 'profileKey';
    
    constructor(private storage: Storage) { }

    criarPerfil(nome: string, email: string, idade: number, instituicaoDeEnsino: string): Promise<Profile> {
        return new Promise((resolve) => {
            this.recuperarPerfis()
                .then(profiles => {
                    let newProfile = new Profile(profiles.length + 1, nome, email, idade, instituicaoDeEnsino);
                    profiles.push(newProfile);
                    this.storage.ready()
                        .then(() => {
                            this.storage.set(this.profileKey, profiles)
                                .then(() => {
                                    resolve(newProfile);
                                })
                        })
                })
        });
    }

    recuperarPerfis(): Promise<Profile[]> {
        return new Promise((resolve) => {
            this.storage.ready()
                .then(() => {
                    this.storage.get(this.profileKey)
                        .then(profiles => {
                            resolve(profiles);
                        });
                });
        });
    }

    excluirPerfil(id: number): Promise<{}> {
        return new Promise((resolve) => {
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
                                    resolve();
                                });
                        });
                });
        });
    }
 }