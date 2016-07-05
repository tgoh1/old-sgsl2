import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwinklePage} from './beginner/twinkle';

@Component({
  templateUrl: 'build/pages/levels/levels.html'
})
export class Levels {

  constructor(private nav: NavController) {
  }

  levels: string="beginner";

  openPage(event){
    console.log("hello");
    this.nav.push(TwinklePage);
  };

}
