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
  date: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvide: WeatherProvider) {
  }

  ionViewDidLoad() {
    this.weatherProvide.currentWeather().subscribe(weather =>{
      this.weather = weather;
      this.descr = this.weather.weather[0].description;
      });

      this.weatherProvide.currentNews().subscribe(news =>{
        this.news = news;
  
        this.article = news.articles[3].description;
        this.ahead = news.articles[3].title;
        this.url = news.articles[3].url;
        this.date = news.articles[3].publishedAt;
      })
  }

}
