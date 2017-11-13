import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-consultorio',
    templateUrl: 'consultorio.html'
})
export class ConsultorioPage {

    constructor(
        private navParams: NavParams
    ) { }

    nivel(): number {
        return this.navParams.get('nivel');
    }

}