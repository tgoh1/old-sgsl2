import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/levels/video1.html'
})
export class Video1 {

  exit(){
    this.navController.pop();
  }

  constructor(private navController: NavController) {
  }
}
