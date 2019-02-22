import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { JobinfoPage } from '../jobinfo/jobinfo';
import { JuegosPage } from '../juegos/juegos';
import { FavoritosProvider } from '../../providers/favoritos/favoritos';

/**
 * Generated class for the TrabajosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trabajos',
  templateUrl: 'trabajos.html',
})
export class TrabajosPage {
  trabajos = [];
  // trabajoPage = TrabajosPage;
  // jobPage = JobinfoPage;
  juegoPage=JuegosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, public fav: FavoritosProvider) 
  {
    this.http.get('v1/klfst?&category=6020&lim=29&lang=es')
    .subscribe (data => {
      console.log(JSON.stringify(data));
      //  if (data.hasOwnProperty('counter_map'))
      //  {
      //    console.log(data.counter_map.all);
      //  }
       if (data.hasOwnProperty('list_ads'))
       {
         this.trabajos = data['list_ads'];
       }
    }, error => {
      console.log(JSON.stringify(error));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrabajosPage');
  }

  verEmpleo(trabajo)
  {
    this.navCtrl.push(this.juegoPage, {videojuego: trabajo});
  }

}
