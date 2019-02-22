import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';
//import { FavoritosProvider } from '../../providers/favoritos/favoritos';
/**
 * Generated class for the JuegosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-juegos',
  templateUrl: 'juegos.html',
})
export class JuegosPage {
  juego = {};
  imgs = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public fav: FavoritosProvider) {
      this.juego = this.navParams.get('videojuego');
      if (this.juego.ad.hasOwnProperty('images'))
      {
       this.imgs = this.juego.ad.images;
     }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JuegosPage');
  }

  favoritos()
  {
    this.fav.addFavoritos(this.juego);
  }

}
