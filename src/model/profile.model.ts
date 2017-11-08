export class Profile {
    id: number;
    private _nome: string;
    private _email: string;
    private _idade: number;
    private _instituicaoDeEnsino: string;

    constructor(id: number, nome: string, email: string, idade: number, instituicaoDeEnsino: string) {
        this.id = id;
        this._nome = nome;
        this._email = email;
        this._idade = idade;
        this._instituicaoDeEnsino = instituicaoDeEnsino;
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
}