import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-textsection',
  templateUrl: './textsection.component.html',
  animations: [
    trigger('fadeInFadeOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.4s ease-in-out',
          style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate('0.4s ease-in-out',
          style({ opacity: 0 }))
      ]),
    ]),

  ],
  styleUrls: ['./textsection.component.scss'],
})

export class TextsectionComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;
  @Input() show: boolean;

  height;
  scrolled = 0;
  hasScroll;

  constructor() {
  }

  ngOnInit(): void {
    var elem
    setTimeout(() => {
      elem = document.getElementById('body-text');
      console.log(elem.scrollHeight);
      if (elem.scrollHeight > (window.innerHeight - 140)) {
        this.hasScroll = true;
      }
      else {
        this.hasScroll = false;
      }
      document.body.style.setProperty('--scroll', `${this.scrolled}`);
    }, 800);//Wait for enter animation time between routes
  }

  onScroll(event: any) {
    var winScroll = event.target.scrollTop;
    this.height = event.target.scrollHeight - event.target.offsetHeight;
    this.scrolled = (winScroll / this.height) * 100;
    document.getElementById("myBar").style.width = this.scrolled + "%";
    if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight) {
      console.log("End");
    }
    //SCROLL ANIMATION VAR TO BIND BOTH
    document.body.style.setProperty('--scroll', `${winScroll}`);
  }
}


