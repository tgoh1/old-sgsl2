import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TwinklePage} from './beginner/twinkle';
import {Video} from '../levels/video/video';
import {Video1} from '../levels/video/video1';
import {Video2} from '../levels/video/video2';

@Component({
  templateUrl: 'build/pages/levels/levels.html'
})
export class Levels {
  constructor(private nav: NavController) {

  }
  levels: string="beginner";

  openPage(event){
    this.nav.push(Video);
  };

  inter(event){
    this.nav.push(Video1);
  };

  adv(event){
    this.nav.push(Video2);
  };
}
