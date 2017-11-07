import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-perfil-carregar',
  templateUrl: 'perfil-carregar.html'
})
export class PerfilCarregarPage {

  constructor(public navCtrl: NavController) {
    console.log("page de carregar");
  }

}