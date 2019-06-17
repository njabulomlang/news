import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the FooterPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-footer',
  templateUrl: 'footer.html'
})
export class FooterPage {

  sowetoRoot = 'SowetoPage'
  ladysmithRoot = 'LadysmithPage'
  durbanRoot = 'DurbanPage'


  constructor(public navCtrl: NavController) {}

}
