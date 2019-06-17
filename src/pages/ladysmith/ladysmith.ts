import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LadysmithPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ladysmith',
  templateUrl: 'ladysmith.html',
})
export class LadysmithPage {
  wNKR: any;
  descr: any;
  nkr: any;
  ahe:any;
  art:any;
  url1:any;
  date1: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvide: WeatherProvider) {
  }

  ionViewDidLoad() {
    this.weatherProvide.currentWeatherNKR().subscribe(wNKR =>{
      this.wNKR = wNKR;
      this.descr = this.wNKR.weather[0].description;
    });

    this.weatherProvide.currentNews().subscribe(nkr =>{
      this.nkr = nkr;

      this.ahe = this.nkr.articles[6].title;
      this.art = this.nkr.articles[6].description;
      this.date1 = this.nkr.articles[6].publishedAt;
        });

}
}
