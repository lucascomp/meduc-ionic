import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Profile } from '../../model/profile.model';

@Component ({
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {

    @Input() profile: Profile;
    @Output() selected = new EventEmitter<any>();

    constructor() { }

    selecionar() {
        this.selected.emit(this.profile.id);
    }

}