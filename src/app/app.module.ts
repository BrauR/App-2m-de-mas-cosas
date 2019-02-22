import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpClientModule } from '@angular/common/http'
import { TrabajosPage } from '../pages/trabajos/trabajos';
import { PrrosPage } from '../pages/prros/prros';
import { JuegosPage } from '../pages/juegos/juegos';
import { TabsPage } from '../pages/tabs/tabs';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { SearchPage } from '../pages/search/search';
import { JobinfoPage } from '../pages/jobinfo/jobinfo';
import { FavoritosProvider } from '../providers/favoritos/favoritos';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TrabajosPage,
    PrrosPage,
    JuegosPage,
    TabsPage,
    FavoritosPage,
    SearchPage,
    JobinfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TrabajosPage,
    JuegosPage,
    PrrosPage,
    TabsPage,
    FavoritosPage,
    SearchPage,
    JobinfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FavoritosProvider
  ]
})
export class AppModule {}
