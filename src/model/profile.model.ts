export class Profile {
    id: number;
    nivel: number;
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
}