import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-perfil-criar',
  templateUrl: 'perfil-criar.html'
})
export class PerfilCriarPage {

  constructor(public navCtrl: NavController) {
    console.log("page de criar");
  }

}