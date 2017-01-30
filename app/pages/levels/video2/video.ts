import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/levels/video2.html'
})
export class Video2 {

  exit(){
    this.navController.pop();
  }

  constructor(private navController: NavController) {
  }
}
