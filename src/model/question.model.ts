export class Question {
    private _id: number;
    private _level: number;
    private _question: string;
    private _options: Option[];

    constructor (
        id: number,
        level: number,
        question: string,
        options: Option[]
    ) {
        this._id = id;
        this._level = level;
        this._question = question;
        this._options = options;
    }

    get id() {
        return this._id;
    }

    get level() {
        return this._level;
    }

    get question() {
        return this._question;
    }

    get options() {
        return this._options;
    }
}

export class Option {
    private _id: number;
    private _answer: string;
    private _value: boolean;

    constructor(id: number, answer: string, value: boolean) {
        this._id = id;
        this._answer = answer;
        this._value = value;
    }

    get id() {
        return this._id;
    }

    get answer() {
        return this._answer;
    }

    get value() {
        return this._value;
    }
}