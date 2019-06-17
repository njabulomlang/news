import { DurbanPage } from './../durban/durban';
import { LadysmithPage } from './../ladysmith/ladysmith';
import { SowetoPage } from './../soweto/soweto';

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather: any;
  wNKR: any;
  wDBN: any;
  tab1: any;
  tab2: any;
  tab3: any;

  constructor(
    public navCtrl: NavController)
    {
      this.tab1 = DurbanPage;
      this.tab2 = LadysmithPage;
      this.tab3 = SowetoPage;

  }

  ionViewDidLoad() {


  }





}
