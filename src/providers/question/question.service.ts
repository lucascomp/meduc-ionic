import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Question } from '../../model/question.model';
import { QUESTIONS } from '../../mock/mock-questions';

@Injectable()
export class QuestionService {
    
    constructor() {}

    getQuestions(): Observable<Question[]> {
        return of(QUESTIONS);
    }
    
}