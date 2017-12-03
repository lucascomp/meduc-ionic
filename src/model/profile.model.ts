export class Profile {
    id: number;
    nivel: number;
    respostasNv0: boolean[] = [];
    respostasNv1: boolean[] = [];
    respostasNv2: boolean[] = [];
    respostasNv3: boolean[] = [];
    respostasNv4: boolean[] = [];
    respostasNv5: boolean[] = [];
    opcoesRespondidasNv0: number[] = [];
    opcoesRespondidasNv1: number[] = [];
    opcoesRespondidasNv2: number[] = [];
    opcoesRespondidasNv3: number[] = [];
    opcoesRespondidasNv4: number[] = [];
    opcoesRespondidasNv5: number[] = [];
    reforco: number;
    private _nome: string;
    private _email: string;
    private _idade: number;
    private _instituicaoDeEnsino: string;

    constructor(profile) {
        Object.assign(this, profile);
    }

    get nome() {
        return this._nome;
    }

    get idade() {
        return this._idade;
    }

    get email() {
        return this._email;
    }

    get instituicaoDeEnsino() {
        return this._instituicaoDeEnsino;
    }

    perguntasRespondidas(nivel: number) {
        switch(nivel) {
            case 0: {
                return this.respostasNv0.length;
            }
            case 1: {
                return this.respostasNv1.length;
            }
            case 2: {
                return this.respostasNv2.length;
            }
            case 3: {
                return this.respostasNv3.length;
            }
            case 4: {
                return this.respostasNv4.length;
            }
            case 5: {
                return this.respostasNv5.length;
            }
        }
    }

    respostasCertas(nivel: number) {
        let respostasCertas: number = 0;
        switch(nivel) {
            case 0: {    
                this.respostasNv0.forEach(resposta => {
                    if(resposta) respostasCertas++;
                });
                break;
            }
            case 1: {
                this.respostasNv1.forEach(resposta => {
                    if(resposta) respostasCertas++;
                });
                break;
            }
            case 2: {
                this.respostasNv2.forEach(resposta => {
                    if(resposta) respostasCertas++;
                });
                break;
            }
            case 3: {
                this.respostasNv3.forEach(resposta => {
                    if(resposta) respostasCertas++;
                });
                break;
            }
            case 4: {
                this.respostasNv4.forEach(resposta => {
                    if(resposta) respostasCertas++;
                });
                break;
            }
            case 5: {
                this.respostasNv5.forEach(resposta => {
                    if(resposta) respostasCertas++;
                });
                break;
            }
        }
        return respostasCertas;
    }

    certa(respIndex: number, nivel: number) {
        switch(nivel) {
            case 0: {
                if(this.respostasNv0[respIndex]) return true;
                else return false;
            }
            case 1: {
                if(this.respostasNv1[respIndex]) return true;
                else return false;
            }
            case 2: {
                if(this.respostasNv2[respIndex]) return true;
                else return false;
            }
            case 3: {
                if(this.respostasNv3[respIndex]) return true;
                else return false;
            }
            case 4: {
                if(this.respostasNv4[respIndex]) return true;
                else return false;
            }
            case 5: {
                if(this.respostasNv5[respIndex]) return true;
                else return false;
            }
        }
    }

    errada(respIndex: number, nivel: number) {
        switch(nivel) {
            case 0: {
                if(!this.respostasNv0[respIndex] && this.respostasNv0.length > respIndex) return true;
                else return false;
            }
            case 1: {
                if(!this.respostasNv1[respIndex] && this.respostasNv1.length > respIndex) return true;
                else return false;
            }
            case 2: {
                if(!this.respostasNv2[respIndex] && this.respostasNv2.length > respIndex) return true;
                else return false;
            }
            case 3: {
                if(!this.respostasNv3[respIndex] && this.respostasNv3.length > respIndex) return true;
                else return false;
            }
            case 4: {
                if(!this.respostasNv4[respIndex] && this.respostasNv4.length > respIndex) return true;
                else return false;
            }
            case 5: {
                if(!this.respostasNv5[respIndex] && this.respostasNv5.length > respIndex) return true;
                else return false;
            }
        }
    }
}