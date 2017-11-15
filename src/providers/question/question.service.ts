import { Injectable } from '@angular/core';

import { Question } from '../../model/question.model';
import { QUESTIONS } from '../../mock/mock-questions';

@Injectable()
export class QuestionService {
    
    constructor() {}

    selecionarPergunta(nivel: number, perguntasRespondidas: number): Question {
        if(nivel == 0) {
            return QUESTIONS[Math.floor(perguntasRespondidas/2) * 12 + (perguntasRespondidas % 2)];
        }
        else {
            return QUESTIONS[(nivel - 1) * 12 + (2 + perguntasRespondidas)];
        }
    }
    
}