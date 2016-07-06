import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/levels/video/video.html'
})
export class Video {

  exit(){
    this.navController.pop();
  }

  constructor(private navController: NavController) {
  }
}
