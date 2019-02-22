import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { SearchPage } from '../search/search';
import { JuegosPage } from '../juegos/juegos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  videojuegos= [];
  buscarPage= SearchPage;
  juegoPage= JuegosPage;

  constructor(public navCtrl: NavController,
                public http: HttpClient) {
    this.http.get('v1/klfst?&category=5060&offset=1&lim=29&lang=es')
    .subscribe (data => {
      //console.log(JSON.stringify(data));
      if (data.hasOwnProperty('list_ads')){
        this.videojuegos = data ['list_ads'];
      }
    }, error => {
      console.log(JSON.stringify(error));
    });

  }
  verJuego(videojuego) {
    this.navCtrl.push(this.juegoPage, {videojuego: videojuego});
  }
  buscar(any){
    this.navCtrl.push(this.buscarPage, {videojuegos:this.videojuegos});
  }

}
