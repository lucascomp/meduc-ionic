import { Component, Input } from '@angular/core';

import { Question } from '../../model/question.model';

@Component ({
    selector: 'pergunta',
    templateUrl: 'pergunta.component.html'
})
export class PerguntaComponent {

    @Input() pergunta: Question;

    constructor() { }
}