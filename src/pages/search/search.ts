import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { JuegosPage } from '../juegos/juegos';

/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  juegos = [];
  items = []; //guarda resutados de la busqueda
  juegosPage = JuegosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.juegos= this.navParams.get ('videojuegos');
  }

  getItems(ev) {
    console.log(ev.target.value);

    this.items = this.juegos.filter(juego => {
      return juego.ad.subject.toLowerCase().includes(ev.target.value.toLowerCase());
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }

  
  verJuego(juego){
    this.navCtrl.push(this.juegosPage, {juego:juego});
  }

}
