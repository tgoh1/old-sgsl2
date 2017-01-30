import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Pushpage} from '../pushpage/pushpage';
import {SGSLVideo} from '../home/video/video';

@Component({
  templateUrl: 'build/pages/home/home.html',


})
export class Home {
  constructor(private nav: NavController) {

  }

  getStart(event){
    this.nav.push(Pushpage);
  }

  getVideo(event){
    this.nav.push(SGSLVideo);
  }
}
