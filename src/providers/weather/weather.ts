import { Http} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';



/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {
  apiKey = 'd888fea3671eaa6aa3d1e679b8283005';
  apiKey2 = '4d1f7e20b86245f897b5a065d1c45f42';

  constructor(public http: Http) {
    console.log('Hello WeatherProvider Provider');

  }

  currentWeather(): Observable<any> {
    const currentInfo = this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=Soweto,za&units=metric&APPID=${this.apiKey}`).map(res => res.json());


        return currentInfo;
      };
      currentWeatherNKR(): Observable<any> {
        const currentInfo = this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=Ladysmith,za&units=metric&APPID=${this.apiKey}`).map(res => res.json());


            return currentInfo;
          };
          currentWeatherDBN(): Observable<any> {
            const currentInfo = this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=Durban,za&units=metric&APPID=${this.apiKey}`).map(res => res.json());


                return currentInfo;
              };
              currentNews(): Observable<any> {
                const currentInfo = this.http.get(`https://newsapi.org/v2/top-headlines?country=za&category=business&apiKey=4d1f7e20b86245f897b5a065d1c45f42`).map(res => res.json());


                    return currentInfo;
                  };

  }



