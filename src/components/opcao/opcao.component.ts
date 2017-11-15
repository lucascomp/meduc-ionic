import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Option } from '../../model/question.model';

@Component ({
    selector: 'opcao',
    templateUrl: 'opcao.component.html'
})
export class OpcaoComponent {

    @Input() opcao: Option;
    @Input() respondido: boolean;
    @Input() opcaoSelecionada: number;
    @Output() selected = new EventEmitter<any>();

    selecionar(): void {
        if(!this.respondido) {
            this.selected.emit(this.opcao.id);
        }
    }

    exibirRespostaCerta(): boolean {
        return this.respondido && this.opcao.value;
    }

    exibirRespostaErrada(): boolean {
        return this.respondido && (this.opcao.id == this.opcaoSelecionada);
    }

}