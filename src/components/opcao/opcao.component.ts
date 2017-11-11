import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Option } from '../../model/question.model';

@Component ({
    selector: 'opcao',
    templateUrl: 'opcao.component.html'
})
export class OpcaoComponent {

    @Input() opcao: Option;
    @Output() selected = new EventEmitter<any>();

    constructor() { }

    selecionar() {
        this.selected.emit(this.opcao.id);
    }

}