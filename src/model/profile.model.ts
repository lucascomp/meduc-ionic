export class Profile {
    id: number;
    nivel: number;
    respostas: boolean[] = [];
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

    get perguntasRespondidas() {
        return this.respostas.length;
    }

    get respostasCertas() {
        let respostasCertas: number = 0;
        this.respostas.forEach(resposta => {
            if(resposta) respostasCertas++;
        })
        return respostasCertas;
    }

    certa(respIndex: number) {
        if(this.respostas[respIndex]) return true;
        else return false;
    }

    errada(respIndex: number) {
        if(!this.respostas[respIndex] && this.respostas.length > respIndex) return true;
        else return false;
    }
}