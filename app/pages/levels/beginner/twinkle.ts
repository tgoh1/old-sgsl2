import {Component, Input} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Video} from '../video/video';

export class Line{
  no: number;
  sentence: string;
  source:string;
}

let LINES: Line[] = [
  { no: 1, sentence: 'Twinkle, twinkle, little star', source:"http://player.vimeo.com/external/85569724.sd.mp4?s=43df5df0d733011263687d20a47557e4" },
  { no: 2, sentence: 'How I wonder what you are', source:"http://npat.club/videos/npat%20cover2.mp4"},
  { no: 3, sentence: 'Up above the world so high', source:"https://player.vimeo.com/video/153747597"},
  { no: 4, sentence: 'Twinkle, twinkle little star',source:"http://www.sample-videos.com/video/mp4/720/big_buck_bunny_720p_1mb.mp4"},
  { no: 5, sentence: 'How I wonder what you are',source:"https://www.youtube.com/embed/mJRcPwXh3Dg"}
];

@Component({
  templateUrl: 'build/pages/levels/beginner/twinkle.html'
})
export class TwinklePage {

  title= 'Twinkle Twinkle Little Star';
  lines= LINES;
  selectedLine: Line;



  onSelect(line: Line){
    this.selectedLine= line;
    this.navController.push(Video);
  };


  constructor(private navController: NavController) {
  }
}
