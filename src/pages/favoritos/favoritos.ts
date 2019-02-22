import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JuegosPage } from '../juegos/juegos';
import {FavoritosProvider} from '../../providers/favoritos/favoritos';

/**
 * Generated class for the FavoritosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html',
})
export class FavoritosPage {
  items = [];
  juegoPage = JuegosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public fav: FavoritosProvider) 
  {
    this.items = this.fav.getFavoritos();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavoritosPage');
  }
  verCasa(juego) {
    this.navCtrl.push(this.juegoPage, {juego: juego});
  }

}
