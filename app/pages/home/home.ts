import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Pushpage} from '../pushpage/pushpage';

@Component({
  templateUrl: 'build/pages/home/home.html',


})
export class Home {
  constructor(private nav: NavController) {

  }

  getStart(event){
    this.nav.push(Pushpage);
  }
}
