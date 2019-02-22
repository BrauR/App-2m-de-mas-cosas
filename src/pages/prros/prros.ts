import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { JuegosPage } from '../juegos/juegos';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the PrrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-prros',
  templateUrl: 'prros.html',
})
export class PrrosPage {
  prros = [];
  juegoPage= JuegosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public fav: FavoritosProvider) 
  {
    this.http.get('/v1/klfst?&category=4020&offset=1&lim=29&lang=es')
    .subscribe (data => {
      console.log(JSON.stringify(data));
      //  if (data.hasOwnProperty('counter_map'))
      //  {
      //    console.log(data.counter_map.all);
      //  }
       if (data.hasOwnProperty('list_ads'))
       {
         this.prros = data['list_ads'];
       }
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrrosPage');
  }

  verPrro(prro)
  {
    this.navCtrl.push(this.juegoPage, {videojuego: prro});
  }

}
