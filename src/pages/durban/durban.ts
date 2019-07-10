import { WeatherProvider } from './../../providers/weather/weather';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


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
   icon: any;
   latitude: any;
   longitude: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private weatherProvide: WeatherProvider,public toastCtrl: ToastController) {

  }

  ionViewDidLoad() {



    this.weatherProvide.currentNews().subscribe( news =>{
      this.newsDurban = news;

      console.log(this.newsDurban);

    } );




  }
 /*  open(){

    for (let i = 0; i < this.newsDurban.articles.length; i++ ) {

        const element = this.newsDurban.articles[i].url;
      window.open(element, '_system')
      console.log(element);
      }


         window.open(this.newsDurban.articles[i].url, '_system');
    }
   */

   open(id) {
     window.open(id, '_system');
   }
}
