import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

export class Line{
  no: number;
  sentence: string;
}

let LINES: Line[] = [
  { no: 1, sentence: 'Twinkle, twinkle, little star' },
  { no: 2, sentence: 'How I wonder what you are'},
  { no: 3, sentence: 'Up above the world so high'},
  { no: 4, sentence: 'Twinkle, twinkle little star'},
  { no: 5, sentence: 'How I wonder what you are'}
];

@Component({
  templateUrl: 'build/pages/levels/beginner/twinkle.html'
})
export class TwinklePage {

  title= 'Twinkle Twinkle Little Star';
  lines= LINES;
  selectedLine: Line;
  video = document.getElementsByTagName('video')[0];
  source = document.getElementsByTagName('video')[0].src;

  onSelect(line: Line){
    this.selectedLine= line;
    this.video.play();

  };


  constructor(private navController: NavController) {
  }
}
