import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
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
  icon: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvide: WeatherProvider,public geolocation: Geolocation) {
  }

  ionViewDidLoad() {

    this.getWeather();
}
getWeather()
  {
    this.geolocation.getCurrentPosition().then((res) => {


      this.weatherProvide.currentWeatherDBN(res.coords.latitude, res.coords.longitude).subscribe(wDBN =>{
      this.wNKR = wDBN;
      this.icon = this.wNKR.weather[0].icon+'.png';

    });

  });

  }
}
