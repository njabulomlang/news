import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SowetoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-soweto',
  templateUrl: 'soweto.html',
})
export class SowetoPage {
  weather: any;
  descr: any;
  news: any;
  article: any;
  ahead: any;
  url: any;
  movie: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvide: WeatherProvider) {
  }

  ionViewDidLoad() {
    this.weatherProvide.Movie().subscribe(movie =>{
      this.movie = movie;
        });
  }

}
