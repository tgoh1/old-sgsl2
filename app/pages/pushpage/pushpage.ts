import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ViewChild } from '@angular/core';
import {Levels} from '../levels/levels';


@Component({
  templateUrl: 'build/pages/pushpage/pushpage.html'
})
export class Pushpage {
   @ViewChild('mySlider') slider: Slides;



  mySlideOptions = {
    initialSlide: 0,
    loop: true
  };

  slides = [
    {
      title: "What is SGSL?",
      description: "SGSL App is the first application that teaches Singapore Sign Language to hearing-impaired children and parents through interactive sign-along nursery rhymes lyric videos.",
      image: "img/ica-slidebox-img-1.jpg",
    },
    {
      title: "Get Updated",
      description: "Our home page features updates on latest events catered for the disabled and hearing impaired community.",
      image: "img/ica-slidebox-img-3.jpg",
    }
    
  ];



  constructor(private nav: NavController) {
  }

  home(event){
    this.nav.pop(Levels);
  }
}
