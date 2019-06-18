import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DurbanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-durban',
  templateUrl: 'durban.html',
})
export class DurbanPage {

  wDBN: any;
  descr: any;
   newsDurban: any;
   durbanArticle: any;
   dbnheader:any;
   dbndate: any;
   movie: any;
   suits: any;
   icon: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvide: WeatherProvider) {

  }

  ionViewDidLoad() {


    this.weatherProvide.currentNews().subscribe( news =>{
      this.newsDurban = news;

  this.durbanArticle = this.newsDurban.articles[0].description;
      this.dbnheader = this.newsDurban.articles[0].title;
      this.dbndate = this.newsDurban.articles[0].publishedAt;
    } );

    this.weatherProvide.Movie().subscribe(movie =>{
    this.movie = movie;


    this.suits = this.movie.Episodes[1].Title;


      });



  this.weatherProvide.currentWeatherDBN().subscribe(wDBN =>{
    this.wDBN = wDBN;
    this.icon = wDBN.weather[0].icon+'.png';
    this.descr = this.wDBN.weather[0].description;

  });

  }


}
